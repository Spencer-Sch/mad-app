import { validateSection } from '@/db/queries/validate'
import { getSectionById } from '@/db/queries/select'
import { validateRouteUUIDs } from '@/lib/utils'

export async function GET(
	request: Request,
	{
		params,
	}: { params: { sectionId: string; chapterId: string; courseId: string } }
) {
	const { sectionId, chapterId, courseId } = params

	const { allValid, invalidKey } = validateRouteUUIDs({
		course: courseId,
		chapter: chapterId,
		section: sectionId,
	})

	if (!allValid) {
		return Response.json(
			{ error: `${invalidKey}Id is not a valid UUID`, code: 'INVALID_UUID' },
			{ status: 400 }
		)
	}

	const isValid = await validateSection(sectionId, chapterId, courseId)

	if (!isValid) {
		return Response.json({ error: 'Invalid section path' }, { status: 404 })
	}

	const section = await getSectionById(sectionId)

	return Response.json({ data: section })
}
