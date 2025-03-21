import { supabase } from '../../client'
import etudeData from '../../../data/etudes.json'
import { BaseSeeder } from './baseSeeder'
import { SeedEtude, Etude } from '../../../types'
import { collectionSeeder } from './collectionSeeder'

export class EtudeSeeder extends BaseSeeder<SeedEtude, Etude> {
	constructor() {
		super(supabase, 'etudes', etudeData)
		this.foreignKeys = ['collection_id']

		// Import reference map from collectionSeeder
		collectionSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const etudeSeeder = new EtudeSeeder()
