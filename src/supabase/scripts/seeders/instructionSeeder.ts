import { supabase } from '../../client'
import instructionData from '../../../data/instructions.json'
import { BaseSeeder } from './baseSeeder'
import { SeedInstruction, Instruction } from '../../../types'

export class InstructionSeeder extends BaseSeeder<
	SeedInstruction,
	Instruction
> {
	constructor() {
		super(supabase, 'instructions', instructionData)
		// entry_id is a foreign key but it could reference multiple tables based on entry_type
		// so we can't automatically resolve it - handle it in the JSON data
		this.foreignKeys = []
	}
}

export const instructionSeeder = new InstructionSeeder()
