import type { SelectCourse as Course } from '@/db/schema'
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function getCourses(): Promise<Array<Course>> {
	try {
		const res = await fetch(`${baseUrl}/courses`)

		if (!res.ok) {
			throw new Error(`Error fetching courses: ${res.status} ${res.statusText}`)
		}

		const { data }: { data: Course[] } = await res.json()
		return data
	} catch (error: unknown) {
		console.error('getCourses error: ', error)

		const errorMessage =
			error instanceof Error ? error.message : 'unknown error occurred'

		throw new Error(`Failed to load courses: ${errorMessage}`)
	}
}
