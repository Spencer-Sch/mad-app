import { supabase } from '../../client'
import sectionData from '../../../data/sections.json'
import { BaseSeeder } from './baseSeeder'
import { SeedSection, Section } from '../../../types'
import { chapterSeeder } from './chapterSeeder'

export class SectionSeeder extends BaseSeeder<SeedSection, Section> {
	constructor() {
		super(supabase, 'sections', sectionData)
		this.foreignKeys = ['chapter_id']

		// Import reference map from chapterSeeder
		chapterSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const sectionSeeder = new SectionSeeder()
