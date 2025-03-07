import { metaDescription } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'MaD App | Course Name',
	description: metaDescription,
}

export default function CoursePage() {
	return (
		<>
			<p>CoursePage</p>
			{/* <CourseHome /> */}
		</>
	)
}
