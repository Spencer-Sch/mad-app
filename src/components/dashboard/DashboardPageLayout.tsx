import { ReactNode } from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
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
			{/* <DashboardHeader /> */}
			<AppSidebar name={appSidebar} openOnHover={true} />
			{/* dashboard page content wrapper div */}
			<main>
				<SidebarTrigger name={appSidebar} />
				{children}
			</main>
			{/* <DashboardFooter /> */}
		</SidebarProvider>
	)
}
