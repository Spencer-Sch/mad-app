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

	public async seed(entityId = 'latest'): Promise<TRow[]> {
		// Get all entity IDs
		const allEntityIds = Object.keys(this.data)

		if (allEntityIds.length === 0) {
			console.warn(`No entities found in data for ${this.table}`)
			return []
		}

		const entitiesToSeed =
			entityId === 'latest'
				? [allEntityIds[allEntityIds.length - 1]] // Just the newest entity
				: entityId === 'all'
					? allEntityIds // All entities
					: [entityId] // Specific entity

		console.log(`Seeding ${this.table} (${entitiesToSeed.join(', ')})...`)

		const seededEntities: TRow[] = []

		for (const id of entitiesToSeed) {
			if (!this.data[id]) {
				console.warn(`Entity ${id} not found in ${this.table} data`)
				continue
			}

			// Get the entity data - assuming we have an array of one entity per ID
			// If you have multiple entities with the same ID, you would iterate through this array
			const entityArray = this.data[id]

			for (const entity of entityArray) {
				// Skip if already seeded
				if (this.referenceMap.has(entity.id)) {
					console.log(
						`Skipping ${this.table} with local ID ${entity.id} (already exists)`
					)
					continue
				}

				// The rest of the processing remains largely the same
				const processedEntity = { ...entity }
				const { id: localId, ...entityToInsert } = processedEntity
				Object.assign(entityToInsert, { local_id: localId })

				// Process foreign keys
				for (const fkField of this.foreignKeys) {
					const fieldValue =
						entityToInsert[fkField as keyof typeof entityToInsert]

					if (fieldValue && typeof fieldValue === 'string') {
						const realId = this.findRealId(fieldValue)
						if (realId) {
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
					this.referenceMap.set(localId, data[0].id)
					seededEntities.push(data[0] as TRow)
					console.log(`✅ Added ${this.table}: ${localId} (${data[0].id})`)
				}
			}
		}

		return seededEntities
	}
}
