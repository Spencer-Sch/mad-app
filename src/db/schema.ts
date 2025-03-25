import {
	boolean,
	pgTable,
	smallint,
	text,
	timestamp,
	uuid,
} from 'drizzle-orm/pg-core'

// Courses Table
export const coursesTable = pgTable('courses', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	title: text('title').notNull().default(''),
	description: text('description'),
	coverImage: text('cover_image'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// Chapters Table
export const chaptersTable = pgTable('chapters', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	courseId: uuid('course_id')
		.notNull()
		.references(() => coursesTable.id),
	number: smallint('number').notNull(),
	title: text('title').notNull(),
	pageNumberStart: smallint('page_number_start').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true })
		.defaultNow()
		.notNull(),
	localId: text('local_id'),
})

// Sections Table
export const sectionsTable = pgTable('sections', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	chapterId: uuid('chapter_id')
		.notNull()
		.references(() => chaptersTable.id),
	number: text('number').notNull(),
	title: text('title').notNull(),
	pageNumber: smallint('page_number').notNull(),
	description: text('description'),
	quote: text('quote'),
	explanationText: text('explanation_text'),
	staffKey: text('staff_key'),
	hasSubsections: boolean('has_subsections').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true })
		.defaultNow()
		.notNull(),
	localId: text('local_id'),
})

// Subsections Table
export const subsectionsTable = pgTable('subsections', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	sectionId: uuid('section_id')
		.notNull()
		.references(() => sectionsTable.id),
	title: text('title').notNull(),
	pageNumber: smallint('page_number').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at', { withTimezone: true })
		.defaultNow()
		.notNull(),
	localId: text('local_id'),
})

// Collections Table
export const collectionsTable = pgTable('collections', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	subsectionId: uuid('subsection_id')
		.notNull()
		.references(() => subsectionsTable.id),
	title: text('title'),
	pageNumber: smallint('page_number').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// Etudes Table
export const etudesTable = pgTable('etudes', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	collectionId: uuid('collection_id')
		.notNull()
		.references(() => collectionsTable.id),
	number: smallint('number').notNull(),
	title: text('title'),
	pageNumber: smallint('page_number').notNull(),
	description: text('description'),
	notation: text('notation'),
	audioUrl: text('audio_url'),
	difficulty: smallint('difficulty'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// Exercises Table
export const exercisesTable = pgTable('exercises', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	collectionId: uuid('collection_id')
		.notNull()
		.references(() => collectionsTable.id),
	number: smallint('number').notNull(),
	title: text('title'),
	description: text('description'),
	notation: text('notation'),
	audioUrl: text('audio_url'),
	difficulty: smallint('difficulty'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// Related Exercises Table (Junction Table)
export const relatedExercisesTable = pgTable('related_exercises', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	etudeId: uuid('etude_id')
		.notNull()
		.references(() => etudesTable.id),
	exerciseId: uuid('exercise_id')
		.notNull()
		.references(() => exercisesTable.id),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// Instructions Table
export const instructionsTable = pgTable('instructions', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	entryType: text('entry_type').notNull(),
	entryId: uuid('entry_id').notNull(),
	content: text('content'),
	order: smallint('order'),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	localId: text('local_id'),
})

// References Table
export const referencesTable = pgTable('references', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	entryType: text('entry_type').notNull(),
	entryId: uuid('entry_id').notNull(),
	referenceType: text('reference_type').notNull(),
	referenceId: text('reference_id').notNull(),
	page: smallint('page').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at', { withTimezone: true }),
	localId: text('local_id'),
})

// Metronome Levels Table
export const metronomeLevelsTable = pgTable('metronome_levels', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	sectionId: uuid('section_id')
		.notNull()
		.references(() => sectionsTable.id),
	label: text('label'),
	beginnerNoteValue: text('beginner_note_value'),
	beginnerTempo: smallint('beginner_tempo'),
	intermediateNoteValue: text('intermediate_note_value'),
	intermediateTempo: smallint('intermediate_tempo'),
	advancedNoteValue: text('advanced_note_value'),
	advancedTempo: smallint('advanced_tempo'),
	createdAt: timestamp('created_at', { withTimezone: true }),
	localId: text('local_id'),
})

// Type Definitions
export type InsertCourse = typeof coursesTable.$inferInsert
export type SelectCourse = typeof coursesTable.$inferSelect

export type InsertChapter = typeof chaptersTable.$inferInsert
export type SelectChapter = typeof chaptersTable.$inferSelect

export type InsertSection = typeof sectionsTable.$inferInsert
export type SelectSection = typeof sectionsTable.$inferSelect

export type InsertSubsection = typeof subsectionsTable.$inferInsert
export type SelectSubsection = typeof subsectionsTable.$inferSelect

export type InsertCollection = typeof collectionsTable.$inferInsert
export type SelectCollection = typeof collectionsTable.$inferSelect

export type InsertEtude = typeof etudesTable.$inferInsert
export type SelectEtude = typeof etudesTable.$inferSelect

export type InsertExercise = typeof exercisesTable.$inferInsert
export type SelectExercise = typeof exercisesTable.$inferSelect

export type InsertRelatedExercise = typeof relatedExercisesTable.$inferInsert
export type SelectRelatedExercise = typeof relatedExercisesTable.$inferSelect

export type InsertInstruction = typeof instructionsTable.$inferInsert
export type SelectInstruction = typeof instructionsTable.$inferSelect

export type InsertReference = typeof referencesTable.$inferInsert
export type SelectReference = typeof referencesTable.$inferSelect

export type InsertMetronomeLevel = typeof metronomeLevelsTable.$inferInsert
export type SelectMetronomeLevel = typeof metronomeLevelsTable.$inferSelect
