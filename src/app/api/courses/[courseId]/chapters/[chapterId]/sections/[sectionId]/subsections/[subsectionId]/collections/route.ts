import { validateSubsection } from '@/db/queries/validate'
import { getSubsectionCollections } from '@/db/queries/select'
import { validateRouteUUIDs } from '@/lib/utils'

export async function GET(
	request: Request,
	{
		params,
	}: {
		params: {
			subsectionId: string
			sectionId: string
			chapterId: string
			courseId: string
		}
	}
) {
	const { subsectionId, sectionId, chapterId, courseId } = params

	const { allValid, invalidKey } = validateRouteUUIDs({
		course: courseId,
		chapter: chapterId,
		section: sectionId,
		subsection: subsectionId,
	})

	if (!allValid) {
		return Response.json(
			{ error: `${invalidKey}Id is not a valid UUID`, code: 'INVALID_UUID' },
			{ status: 400 }
		)
	}

	const isValid = await validateSubsection(
		subsectionId,
		sectionId,
		chapterId,
		courseId
	)

	if (!isValid) {
		return Response.json({ error: 'Invalid subsection path' }, { status: 404 })
	}

	const collections = await getSubsectionCollections(subsectionId)

	return Response.json({ data: collections })
}
