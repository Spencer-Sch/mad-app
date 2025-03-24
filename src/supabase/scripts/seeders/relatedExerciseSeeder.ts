import { supabase } from '../../client'
import relatedExerciseData from '../../../data/related_exercises.json'
import { BaseSeeder } from './baseSeeder'
import { SeedRelatedExercise, RelatedExercise } from '../../../types'
import { exerciseSeeder } from './exerciseSeeder'
import { etudeSeeder } from './etudeSeeder'

export class RelatedExerciseSeeder extends BaseSeeder<
	SeedRelatedExercise,
	RelatedExercise
> {
	constructor() {
		super(supabase, 'related_exercises', relatedExerciseData)
		this.foreignKeys = ['exercise_id', 'etude_id']

		// Import reference map from exerciseSeeder and etudeSeeder
		exerciseSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})

		etudeSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const relatedExerciseSeeder = new RelatedExerciseSeeder()
