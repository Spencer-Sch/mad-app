import { eq, and, sql } from 'drizzle-orm'
import { db } from '@/db/index'
import {
	coursesTable,
	chaptersTable,
	sectionsTable,
	subsectionsTable,
	collectionsTable,
	exercisesTable,
	etudesTable,
} from '@/db/schema'
import type {
	SelectCourse,
	SelectChapter,
	SelectSection,
	SelectSubsection,
	SelectCollection,
	SelectExercise,
	SelectEtude,
} from '@/db/schema'

// Validate just course
export async function validateCourse(
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(coursesTable)
		.where(eq(coursesTable.id, courseId))
		.limit(1)

	return result[0].count > 0
}

// Validate chapter + its parent course
export async function validateChapter(
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(chaptersTable)
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(and(eq(chaptersTable.id, chapterId), eq(coursesTable.id, courseId)))
		.limit(1)

	return result[0].count > 0
}

// Validate section + its parent chapter + grandparent course
export async function validateSection(
	sectionId: SelectSection['id'],
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(sectionsTable)
		.innerJoin(chaptersTable, eq(sectionsTable.chapterId, chaptersTable.id))
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(
			and(
				eq(sectionsTable.id, sectionId),
				eq(chaptersTable.id, chapterId),
				eq(coursesTable.id, courseId)
			)
		)

	return result[0].count > 0
}

// Validate subsection + its parent section + grandparent chapter + greatgrandparent course
export async function validateSubsection(
	subsectionId: SelectSubsection['id'],
	sectionId: SelectSection['id'],
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(subsectionsTable)
		.innerJoin(sectionsTable, eq(subsectionsTable.sectionId, sectionsTable.id))
		.innerJoin(chaptersTable, eq(sectionsTable.chapterId, chaptersTable.id))
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(
			and(
				eq(subsectionsTable.id, subsectionId),
				eq(sectionsTable.id, sectionId),
				eq(chaptersTable.id, chapterId),
				eq(coursesTable.id, courseId)
			)
		)

	return result[0].count > 0
}

// Validate collection + its parent subsection + section + chapter + course
export async function validateCollection(
	collectionId: SelectCollection['id'],
	subsectionId: SelectSubsection['id'],
	sectionId: SelectSection['id'],
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(collectionsTable)
		.innerJoin(
			subsectionsTable,
			eq(collectionsTable.subsectionId, subsectionsTable.id)
		)
		.innerJoin(sectionsTable, eq(subsectionsTable.sectionId, sectionsTable.id))
		.innerJoin(chaptersTable, eq(sectionsTable.chapterId, chaptersTable.id))
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(
			and(
				eq(collectionsTable.id, collectionId),
				eq(subsectionsTable.id, subsectionId),
				eq(sectionsTable.id, sectionId),
				eq(chaptersTable.id, chapterId),
				eq(coursesTable.id, courseId)
			)
		)

	return result[0].count > 0
}

// Validate exercise + collection + subsection + section + chapter + course
export async function validateExercise(
	exerciseId: SelectExercise['id'],
	collectionId: SelectCollection['id'],
	subsectionId: SelectSubsection['id'],
	sectionId: SelectSection['id'],
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(exercisesTable)
		.innerJoin(
			collectionsTable,
			eq(exercisesTable.collectionId, collectionsTable.id)
		)
		.innerJoin(
			subsectionsTable,
			eq(collectionsTable.subsectionId, subsectionsTable.id)
		)
		.innerJoin(sectionsTable, eq(subsectionsTable.sectionId, sectionsTable.id))
		.innerJoin(chaptersTable, eq(sectionsTable.chapterId, chaptersTable.id))
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(
			and(
				eq(exercisesTable.id, exerciseId),
				eq(collectionsTable.id, collectionId),
				eq(subsectionsTable.id, subsectionId),
				eq(sectionsTable.id, sectionId),
				eq(chaptersTable.id, chapterId),
				eq(coursesTable.id, courseId)
			)
		)

	return result[0].count > 0
}

// Validate etude + collection + subsection + section + chapter + course
export async function validateEtude(
	etudeId: SelectEtude['id'],
	collectionId: SelectCollection['id'],
	subsectionId: SelectSubsection['id'],
	sectionId: SelectSection['id'],
	chapterId: SelectChapter['id'],
	courseId: SelectCourse['id']
): Promise<boolean> {
	const result = await db
		.select({ count: sql`count(*)`.mapWith(Number) })
		.from(etudesTable)
		.innerJoin(
			collectionsTable,
			eq(exercisesTable.collectionId, collectionsTable.id)
		)
		.innerJoin(
			subsectionsTable,
			eq(collectionsTable.subsectionId, subsectionsTable.id)
		)
		.innerJoin(sectionsTable, eq(subsectionsTable.sectionId, sectionsTable.id))
		.innerJoin(chaptersTable, eq(sectionsTable.chapterId, chaptersTable.id))
		.innerJoin(coursesTable, eq(chaptersTable.courseId, coursesTable.id))
		.where(
			and(
				eq(etudesTable.id, etudeId),
				eq(collectionsTable.id, collectionId),
				eq(subsectionsTable.id, subsectionId),
				eq(sectionsTable.id, sectionId),
				eq(chaptersTable.id, chapterId),
				eq(coursesTable.id, courseId)
			)
		)

	return result[0].count > 0
}
