import { Database } from './supabase'

// Extract table types from the Database type
export type DatabaseTables = Database['public']['Tables']

// Define table row types
export type Course = DatabaseTables['courses']['Row']
export type Chapter = DatabaseTables['chapters']['Row']
export type Section = DatabaseTables['sections']['Row']
export type Subsection = DatabaseTables['subsections']['Row']
export type Collection = DatabaseTables['collections']['Row']
export type Exercise = DatabaseTables['exercises']['Row']
export type Etude = DatabaseTables['etudes']['Row']
export type Instruction = DatabaseTables['instructions']['Row']
export type Reference = DatabaseTables['references']['Row']
export type MetronomeLevel = DatabaseTables['metronome_levels']['Row']
export type RelatedExercise = DatabaseTables['related_exercises']['Row']

// Define seed entity types (with string IDs for local reference)
export interface SeedEntity {
	id: string
}

export interface SeedCourse extends SeedEntity {
	title: string
	description?: string
	cover_image?: string
}

export interface SeedChapter extends SeedEntity {
	course_id: string
	number: number
	title: string
	page_number_start: number
}

export interface SeedSection extends SeedEntity {
	chapter_id: string
	number: string
	title: string
	page_number: number
	description?: string
	quote?: string
	explanation_text?: string
	staff_key?: string
	has_subsections: boolean
}

export interface SeedSubsection extends SeedEntity {
	section_id: string
	title: string
	page_number: number
	description?: string
}

export interface SeedCollection extends SeedEntity {
	subsection_id: string
	title?: string
	page_number: number
	description?: string
}

export interface SeedExercise extends SeedEntity {
	collection_id: string
	number: number
	title?: string
	description?: string
	notation?: string
	audio_url?: string
	difficulty?: number
}

export interface SeedEtude extends SeedEntity {
	collection_id: string
	number: number
	title?: string
	page_number: number
	description?: string
	notation?: string
	audio_url?: string
	difficulty?: number
}

export interface SeedInstruction extends SeedEntity {
	entry_type: string
	entry_id: string
	content?: string
	order?: number
}

export interface SeedReference extends SeedEntity {
	entry_type: string
	entry_id: string
	reference_type: string
	reference_id: string
	page: number
	description?: string
}

export interface SeedMetronomeLevel extends SeedEntity {
	section_id: string
	label?: string
	beginner_note_value?: string
	beginner_tempo?: number
	intermediate_note_value?: string
	intermediate_tempo?: number
	advanced_note_value?: string
	advanced_tempo?: number
}

export interface SeedRelatedExercise extends SeedEntity {
	etude_id: string
	exercise_id: string
}
