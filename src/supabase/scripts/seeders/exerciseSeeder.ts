import { supabase } from '../../client'
import exerciseData from '../../../data/exercises.json'
import { BaseSeeder } from './baseSeeder'
import { SeedExercise, Exercise } from '../../../types'
import { collectionSeeder } from './collectionSeeder'

export class ExerciseSeeder extends BaseSeeder<SeedExercise, Exercise> {
	constructor() {
		super(supabase, 'exercises', exerciseData)
		this.foreignKeys = ['collection_id']

		// Import reference map from collectionSeeder
		collectionSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const exerciseSeeder = new ExerciseSeeder()
