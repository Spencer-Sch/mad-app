import { validateChapter } from '@/db/queries/validate'
import { getChapterById } from '@/db/queries/select'
import { validateRouteUUIDs } from '@/lib/utils'

export async function GET(
	request: Request,
	{ params }: { params: { chapterId: string; courseId: string } }
) {
	const { chapterId, courseId } = params

	const { allValid, invalidKey } = validateRouteUUIDs({
		course: courseId,
		chapter: chapterId,
	})

	if (!allValid) {
		return Response.json(
			{ error: `${invalidKey}Id is not a valid UUID`, code: 'INVALID_UUID' },
			{ status: 400 }
		)
	}

	const isValid = await validateChapter(chapterId, courseId)

	if (!isValid) {
		return Response.json({ error: 'Invalid chapter path' }, { status: 404 })
	}

	const chapter = await getChapterById(chapterId)

	return Response.json({ data: chapter })
}
