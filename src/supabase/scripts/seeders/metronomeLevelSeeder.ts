import { supabase } from '../../client'
import metronomeLevelData from '../../../data/metronome_levels.json'
import { BaseSeeder } from './baseSeeder'
import { SeedMetronomeLevel, MetronomeLevel } from '../../../types'
import { sectionSeeder } from './sectionSeeder'

export class MetronomeLevelSeeder extends BaseSeeder<
	SeedMetronomeLevel,
	MetronomeLevel
> {
	constructor() {
		super(supabase, 'metronome_levels', metronomeLevelData)
		this.foreignKeys = ['section_id']

		// Import reference map from sectionSeeder
		sectionSeeder.getReferenceMap().forEach((value, key) => {
			this.referenceMap.set(key, value)
		})
	}
}

export const metronomeLevelSeeder = new MetronomeLevelSeeder()
