import { supabase } from '../../client'
import subsectionData from '../../../data/subsections.json'
import { BaseSeeder } from './baseSeeder'
import { SeedSubsection, Subsection } from '../../../types'
import { sectionSeeder } from './sectionSeeder'

export class SubsectionSeeder extends BaseSeeder<SeedSubsection, Subsection> {
	constructor() {
		super(supabase, 'subsections', subsectionData)
		this.foreignKeys = ['section_id']

		// Import reference map from sectionSeeder
		sectionSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const subsectionSeeder = new SubsectionSeeder()
