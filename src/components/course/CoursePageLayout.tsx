import { ReactNode } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import CourseSidebar from '@/components/course/CourseSidebar'
import { sidebarNames } from '@/lib/constants'
import BaseLayout from '../layout/BaseLayout'
import CourseHeader from './CourseHeader'

export default function CoursePageLayout({
	children,
}: {
	children: ReactNode
}) {
	const { appSidebar, courseSidebar } = sidebarNames
	return (
		<SidebarProvider
			defaultOpen={[]}
			sidebarNames={[appSidebar, courseSidebar]}
		>
			<div className="w-[--sidebar-width-icon] shrink-0">
				<AppSidebar name={appSidebar} openOnHover={true} />
			</div>
			<div className="shrink-0">
				<CourseSidebar name={courseSidebar} />
			</div>
			<div className="flex-grow">
				<BaseLayout header={<CourseHeader />}>{children}</BaseLayout>
			</div>
		</SidebarProvider>
	)
}
