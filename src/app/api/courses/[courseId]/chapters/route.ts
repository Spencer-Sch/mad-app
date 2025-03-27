import { validateCourse } from '@/db/queries/validate'
import { getCourseChapters } from '@/db/queries/select'
import { validateRouteUUIDs } from '@/lib/utils'

export async function GET(
	request: Request,
	{ params }: { params: { courseId: string } }
) {
	const { courseId } = params

	const { allValid, invalidKey } = validateRouteUUIDs({
		course: courseId,
	})

	if (!allValid) {
		return Response.json(
			{ error: `${invalidKey}Id is not a valid UUID`, code: 'INVALID_UUID' },
			{ status: 400 }
		)
	}

	const isValid = await validateCourse(courseId)

	if (!isValid) {
		return Response.json({ error: 'Invalid course path' }, { status: 404 })
	}

	const chapters = await getCourseChapters(courseId)

	return Response.json({ data: chapters })
}
