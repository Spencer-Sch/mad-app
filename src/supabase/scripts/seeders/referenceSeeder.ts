import { supabase } from '../../client'
import referenceData from '../../../data/references.json'
import { BaseSeeder } from './baseSeeder'
import { SeedReference, Reference } from '../../../types'

export class ReferenceSeeder extends BaseSeeder<SeedReference, Reference> {
	constructor() {
		super(supabase, 'references', referenceData)
		// entry_id is a foreign key but it could reference multiple tables based on entry_type
		// so we can't automatically resolve it - handle it in the JSON data
		this.foreignKeys = []
	}
}

export const referenceSeeder = new ReferenceSeeder()
