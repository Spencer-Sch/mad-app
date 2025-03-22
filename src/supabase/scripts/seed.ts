import dotenv from 'dotenv'
import { resolve } from 'path'
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

// Import all seeders
import { courseSeeder } from './seeders/courseSeeder'
import { chapterSeeder } from './seeders/chapterSeeder'
import { sectionSeeder } from './seeders/sectionSeeder'
import { subsectionSeeder } from './seeders/subsectionSeeder'
import { collectionSeeder } from './seeders/collectionSeeder'
import { exerciseSeeder } from './seeders/exerciseSeeder'
import { etudeSeeder } from './seeders/etudeSeeder'
import { instructionSeeder } from './seeders/instructionSeeder'
import { referenceSeeder } from './seeders/referenceSeeder'
import { metronomeLevelSeeder } from './seeders/metronomeLevelSeeder'
import { relatedExerciseSeeder } from './seeders/relatedExerciseSeeder'
import { BaseSeeder } from './seeders/baseSeeder'

console.log('Starting seeding process...')
console.log(
	`SUPABASE_URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'defined' : 'undefined'}`
)
console.log(
	`SUPABASE_ANON_KEY: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'defined' : 'undefined'}`
)

// Define the entity types as a type
type EntityType =
	| 'courses'
	| 'chapters'
	| 'sections'
	| 'subsections'
	| 'collections'
	| 'exercises'
	| 'etudes'
	| 'instructions'
	| 'references'
	| 'metronome_levels'
	| 'related_exercises'

// Map of entity types to their seeders
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const seeders: Record<EntityType, BaseSeeder<any, any>> = {
	courses: courseSeeder,
	chapters: chapterSeeder,
	sections: sectionSeeder,
	subsections: subsectionSeeder,
	collections: collectionSeeder,
	exercises: exerciseSeeder,
	etudes: etudeSeeder,
	instructions: instructionSeeder,
	references: referenceSeeder,
	metronome_levels: metronomeLevelSeeder,
	related_exercises: relatedExerciseSeeder,
}

// Dependencies between entities
const dependencies: Record<EntityType, EntityType[]> = {
	courses: [],
	chapters: ['courses'],
	sections: ['chapters'],
	subsections: ['sections'],
	collections: ['subsections'],
	exercises: ['collections'],
	etudes: ['collections'],
	instructions: [], // Special case - handled separately
	references: [], // Special case - handled separately
	metronome_levels: ['sections'],
	related_exercises: ['exercises', 'etudes'],
}

async function seedEntity(entityType: EntityType, version = 'latest') {
	console.log(`\nProcessing ${entityType}...`)

	// Load existing entities first
	console.log(`Loading existing ${entityType}...`)
	await seeders[entityType].loadExistingEntities()

	// Load dependencies first
	for (const dep of dependencies[entityType]) {
		// Load existing references for this dependency
		console.log(`Loading dependency: ${dep}`)
		await seeders[dep].loadExistingEntities()

		seeders[entityType].copyReferencesFrom(seeders[dep])
	}

	// Seed the entity
	await seeders[entityType].seed(version)
}

async function main() {
	try {
		// Parse command line arguments
		const args = process.argv.slice(2)
		const version = args.includes('--all') ? 'all' : 'latest'
		const entityTypeArg = args[0] || 'all'

		if (entityTypeArg === 'all') {
			// Seed everything in dependency order
			const allEntities = Object.keys(seeders) as EntityType[]
			const processedEntities = new Set<EntityType>()

			// Process entities respecting dependencies
			while (processedEntities.size < allEntities.length) {
				let processedAny = false

				for (const entity of allEntities) {
					if (processedEntities.has(entity)) continue

					// Check if all dependencies are processed
					const deps = dependencies[entity]
					const allDepsProcessed = deps.every((dep) =>
						processedEntities.has(dep)
					)

					if (allDepsProcessed) {
						await seedEntity(entity, version)
						processedEntities.add(entity)
						processedAny = true
					}
				}

				// If we didn't process any entities in this pass, there might be a dependency cycle
				if (!processedAny && processedEntities.size < allEntities.length) {
					const remaining = allEntities.filter(
						(entity) => !processedEntities.has(entity)
					)
					console.error(
						`Possible dependency cycle detected. Could not process: ${remaining.join(', ')}`
					)
					break
				}
			}
		} else {
			// Seed just the requested entity
			if (!Object.keys(seeders).includes(entityTypeArg)) {
				console.error(`Unknown entity type: ${entityTypeArg}`)
				process.exit(1)
			}

			await seedEntity(entityTypeArg as EntityType, version)
		}

		console.log('\n✅ Database seeding completed successfully!')
	} catch (error) {
		console.error('\n❌ Seeding failed:', error)
		process.exit(1)
	}
}

console.log('Script initialized, calling main()...')
main().catch((error) => {
	console.error('Unhandled error in main:', error)
	process.exit(1)
})
