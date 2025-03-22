import { supabase } from '../../client'
import chapterData from '../../../data/chapters.json'
import { BaseSeeder } from './baseSeeder'
import { SeedChapter, Chapter } from '../../../types'
import { courseSeeder } from './courseSeeder'

export class ChapterSeeder extends BaseSeeder<SeedChapter, Chapter> {
	constructor() {
		super(supabase, 'chapters', chapterData)
		this.foreignKeys = ['course_id']

		courseSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const chapterSeeder = new ChapterSeeder()
