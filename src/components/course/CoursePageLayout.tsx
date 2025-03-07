import { ReactNode } from 'react'
import {
	SidebarInset,
	SidebarProvider,
	// SidebarTrigger,
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
			<div className="w-[--sidebar-width-icon]">
				<AppSidebar name={appSidebar} openOnHover={true} />
			</div>
			<div className="w-full flex">
				<CourseSidebar name={courseSidebar} />
				<SidebarInset>
					{/* <CourseHeader /> */}
					{/* <SidebarTrigger name={appSidebar} /> */}
					{children}
				</SidebarInset>
			</div>
		</SidebarProvider>
	)
}
