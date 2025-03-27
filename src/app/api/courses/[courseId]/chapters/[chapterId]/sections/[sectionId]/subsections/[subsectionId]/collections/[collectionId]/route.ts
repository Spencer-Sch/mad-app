import { validateCollection } from '@/db/queries/validate'
import { getCollectionById } from '@/db/queries/select'
import { validateRouteUUIDs } from '@/lib/utils'

export async function GET(
	request: Request,
	{
		params,
	}: {
		params: {
			collectionId: string
			subsectionId: string
			sectionId: string
			chapterId: string
			courseId: string
		}
	}
) {
	const { collectionId, subsectionId, sectionId, chapterId, courseId } = params

	const { allValid, invalidKey } = validateRouteUUIDs({
		course: courseId,
		chapter: chapterId,
		section: sectionId,
		subsection: subsectionId,
		collection: collectionId,
	})

	if (!allValid) {
		return Response.json(
			{ error: `${invalidKey}Id is not a valid UUID`, code: 'INVALID_UUID' },
			{ status: 400 }
		)
	}

	const isValid = await validateCollection(
		collectionId,
		subsectionId,
		sectionId,
		chapterId,
		courseId
	)

	if (!isValid) {
		return Response.json({ error: 'Invalid collection path' }, { status: 404 })
	}

	const collection = await getCollectionById(collectionId)

	return Response.json({ data: collection })
}
