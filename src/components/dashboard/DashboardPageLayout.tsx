import { ReactNode } from 'react'
import {
	SidebarInset,
	SidebarProvider /* SidebarTrigger */,
} from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import { SIDEBAR_NAMES } from '@/lib/constants'

export default function DashboardPageLayout({
	children,
}: {
	children: ReactNode
}) {
	const { appSidebar } = SIDEBAR_NAMES
	return (
		<SidebarProvider defaultOpen={[]} sidebarNames={[appSidebar]}>
			<div className="w-[--sidebar-width-icon]">
				<AppSidebar name={appSidebar} openOnHover={true} />
			</div>
			<SidebarInset>
				{/* <DashboardHeader /> */}
				{/* <SidebarTrigger name={appSidebar} /> */}
				{children}
				{/* <DashboardFooter /> */}
			</SidebarInset>
		</SidebarProvider>
	)
}
