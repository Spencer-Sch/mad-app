import CoursePageLayout from '@/components/course/CoursePageLayout'
import { ReactNode } from 'react'

export default function CourseLayout({ children }: { children: ReactNode }) {
	return <CoursePageLayout>{children}</CoursePageLayout>
}
