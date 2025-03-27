import { eq } from 'drizzle-orm'
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

export async function getAllCourses(): Promise<Array<SelectCourse> | []> {
	return db.select().from(coursesTable)
}

export async function getCourseById(
	courseId: SelectCourse['id']
): Promise<SelectCourse | null> {
	const course = await db
		.select()
		.from(coursesTable)
		.where(eq(coursesTable.id, courseId))
		.limit(1)

	return course.length > 0 ? course[0] : null
}

export async function getCourseChapters(
	courseId: SelectCourse['id']
): Promise<Array<SelectChapter> | []> {
	return db
		.select()
		.from(chaptersTable)
		.where(eq(chaptersTable.courseId, courseId))
}

export async function getChapterById(
	chapterId: SelectChapter['id']
): Promise<SelectChapter | null> {
	const chapter = await db
		.select()
		.from(chaptersTable)
		.where(eq(chaptersTable.id, chapterId))
		.limit(1)

	return chapter.length > 0 ? chapter[0] : null
}

export async function getChapterSections(
	chapterId: SelectChapter['id']
): Promise<Array<SelectSection> | []> {
	return db
		.select()
		.from(sectionsTable)
		.where(eq(sectionsTable.chapterId, chapterId))
}

export async function getSectionById(
	sectionId: SelectSection['id']
): Promise<SelectSection | null> {
	const section = await db
		.select()
		.from(sectionsTable)
		.where(eq(sectionsTable.id, sectionId))
		.limit(1)

	return section.length > 0 ? section[0] : null
}

export async function getSectionSubsections(
	sectionId: SelectSection['id']
): Promise<Array<SelectSubsection> | []> {
	return db
		.select()
		.from(subsectionsTable)
		.where(eq(subsectionsTable.sectionId, sectionId))
}

export async function getSubsectionById(
	subsectionId: SelectSubsection['id']
): Promise<SelectSubsection | null> {
	const subsection = await db
		.select()
		.from(subsectionsTable)
		.where(eq(subsectionsTable.id, subsectionId))
		.limit(1)

	return subsection.length > 0 ? subsection[0] : null
}

export async function getSubsectionCollections(
	subsectionId: SelectSubsection['id']
): Promise<Array<SelectCollection> | []> {
	return db
		.select()
		.from(collectionsTable)
		.where(eq(collectionsTable.subsectionId, subsectionId))
}

export async function getCollectionById(
	collectionId: SelectCollection['id']
): Promise<SelectCollection | null> {
	const collection = await db
		.select()
		.from(collectionsTable)
		.where(eq(collectionsTable.id, collectionId))
		.limit(1)

	return collection.length > 0 ? collection[0] : null
}

export async function getCollectionExercises(
	collectionId: SelectCollection['id']
): Promise<Array<SelectExercise> | []> {
	return db
		.select()
		.from(exercisesTable)
		.where(eq(exercisesTable.collectionId, collectionId))
}

export async function getCollectionEtudes(
	collectionId: SelectCollection['id']
): Promise<Array<SelectEtude> | []> {
	return db
		.select()
		.from(etudesTable)
		.where(eq(etudesTable.collectionId, collectionId))
}
