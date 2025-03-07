import { ReactNode } from 'react'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import CourseSidebar from '@/components/course/CourseSidebar'
import { SIDEBAR_NAMES } from '@/lib/constants'

export default function CoursePageLayout({
	children,
}: {
	children: ReactNode
}) {
	const { appSidebar, courseSidebar } = SIDEBAR_NAMES
	return (
		<SidebarProvider
			defaultOpen={[]}
			sidebarNames={[appSidebar, courseSidebar]}
		>
			{/* <CourseHeader /> */}
			<AppSidebar name={appSidebar} openOnHover={true} />
			<CourseSidebar name={courseSidebar} />
			<SidebarInset>
				<SidebarTrigger name={appSidebar} />
				{/* course page content wrapper div */}
				<main>{children}</main>
			</SidebarInset>
		</SidebarProvider>
	)
}
