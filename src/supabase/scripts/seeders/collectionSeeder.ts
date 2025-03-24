import { supabase } from '../../client'
import collectionData from '../../../data/collections.json'
import { BaseSeeder } from './baseSeeder'
import { SeedCollection, Collection } from '../../../types'
import { subsectionSeeder } from './subsectionSeeder'

export class CollectionSeeder extends BaseSeeder<SeedCollection, Collection> {
	constructor() {
		super(supabase, 'collections', collectionData)
		this.foreignKeys = ['subsection_id']

		// Import reference map from subsectionSeeder
		subsectionSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const collectionSeeder = new CollectionSeeder()
