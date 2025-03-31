import CoursesHome from '@/components/courses/CoursesHome'
import { metaDescription } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'MaD App | Courses',
	description: metaDescription,
}

export default function CoursesPage() {
	return <CoursesHome />
}
