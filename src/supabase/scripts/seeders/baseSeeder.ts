/* eslint-disable @typescript-eslint/no-explicit-any */
import { SupabaseClient } from '@supabase/supabase-js'
import { SeedEntity } from '@/types'

export abstract class BaseSeeder<TSeed extends SeedEntity, TRow> {
	protected supabase: SupabaseClient
	protected table: string
	protected data: Record<string, TSeed[]>
	protected foreignKeys: (keyof Omit<TSeed, 'id'>)[] = []
	protected referenceMap: Map<string, string> = new Map()

	constructor(
		supabase: SupabaseClient,
		table: string,
		data: Record<string, TSeed[]>
	) {
		this.supabase = supabase
		this.table = table
		this.data = data
	}

	protected findRealId(localId: string): string | null {
		return this.referenceMap.get(localId) || null
	}

	public getReferenceMap(): Map<string, string> {
		return this.referenceMap
	}

	public copyReferencesFrom(otherSeeder: BaseSeeder<any, any>): void {
		otherSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}

	public async loadExistingEntities(): Promise<void> {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('id, local_id')

		if (error) {
			console.error(`Error loading existing ${this.table}:`, error)
			throw error
		}

		if (data) {
			data.forEach((entity) => {
				if (entity.local_id) {
					this.referenceMap.set(entity.local_id, entity.id)
				}
			})
		}
	}

	public async seed(version = 'latest'): Promise<TRow[]> {
		// Determine which versions to seed
		const allVersions = Object.keys(this.data)

		if (allVersions.length === 0) {
			console.warn(`No versions found in data for ${this.table}`)
			return []
		}

		const versionsToSeed =
			version === 'latest'
				? [allVersions[allVersions.length - 1]] // Just the newest version
				: version === 'all'
					? allVersions // All versions
					: [version] // Specific version

		console.log(`Seeding ${this.table} (${versionsToSeed.join(', ')})...`)

		const seededEntities: TRow[] = []

		for (const ver of versionsToSeed) {
			if (!this.data[ver]) {
				console.warn(`Version ${ver} not found in ${this.table} data`)
				continue
			}

			// Process entities for this version
			for (const entity of this.data[ver]) {
				// Skip if already seeded
				if (this.referenceMap.has(entity.id)) {
					console.log(
						`Skipping ${this.table} with local ID ${entity.id} (already exists)`
					)
					continue
				}

				// Replace foreign key references with actual database IDs
				const processedEntity = { ...entity }

				// Remove the local ID before insertion
				const { id: localId, ...entityToInsert } = processedEntity

				// Add local_id field to track our entities
				Object.assign(entityToInsert, { local_id: localId })

				// Process foreign keys
				for (const fkField of this.foreignKeys) {
					// Using type assertion to satisfy TypeScript
					const fieldValue =
						entityToInsert[fkField as keyof typeof entityToInsert]

					if (fieldValue && typeof fieldValue === 'string') {
						const realId = this.findRealId(fieldValue)
						if (realId) {
							// Use type assertion to tell TypeScript this is safe
							;(entityToInsert as any)[fkField] = realId
						} else {
							console.warn(
								`Could not find real ID for ${String(fkField)} = ${fieldValue}`
							)
						}
					}
				}

				// Insert the entity
				const { data, error } = await this.supabase
					.from(this.table)
					.insert([entityToInsert as any])
					.select()

				if (error) {
					console.error(`Error seeding ${this.table}:`, error)
					throw error
				}

				if (data && data.length > 0) {
					// Map the local ID to the database ID
					this.referenceMap.set(localId, data[0].id)
					seededEntities.push(data[0] as TRow)
					console.log(`✅ Added ${this.table}: ${localId} (${data[0].id})`)
				}
			}
		}

		return seededEntities
	}
}
