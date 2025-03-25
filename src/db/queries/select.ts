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

export async function getAllCourses(): Promise<Array<SelectCourse>> {
	return db.select().from(coursesTable)
}

export async function getCourseById(
	id: SelectCourse['id']
): Promise<Array<SelectCourse>> {
	return db.select().from(coursesTable).where(eq(coursesTable.id, id))
}

export async function getCourseChapters(
	courseId: SelectCourse['id']
): Promise<Array<SelectChapter>> {
	return db
		.select()
		.from(chaptersTable)
		.where(eq(chaptersTable.courseId, courseId))
}

export async function getChapterSections(
	chapterId: SelectChapter['id']
): Promise<Array<SelectSection>> {
	return db
		.select()
		.from(sectionsTable)
		.where(eq(sectionsTable.chapterId, chapterId))
}

export async function getSectionSubsections(
	sectionId: SelectSection['id']
): Promise<Array<SelectSubsection>> {
	return db
		.select()
		.from(subsectionsTable)
		.where(eq(subsectionsTable.sectionId, sectionId))
}

export async function getSubsectionCollections(
	subsectionId: SelectSubsection['id']
): Promise<Array<SelectCollection>> {
	return db
		.select()
		.from(collectionsTable)
		.where(eq(collectionsTable.subsectionId, subsectionId))
}

export async function getCollectionExercises(
	collectionId: SelectCollection['id']
): Promise<Array<SelectExercise>> {
	return db
		.select()
		.from(exercisesTable)
		.where(eq(exercisesTable.collectionId, collectionId))
}

export async function getCollectionEtudes(
	collectionId: SelectCollection['id']
): Promise<Array<SelectEtude>> {
	return db
		.select()
		.from(etudesTable)
		.where(eq(etudesTable.collectionId, collectionId))
}
