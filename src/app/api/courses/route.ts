import { getAllCourses } from '@/db/queries/select'

export async function GET() {
	const data = await getAllCourses()

	if (!data) {
		return Response.json({ error: 'No Courses were found' }, { status: 404 })
	}

	return Response.json({ data })
}
