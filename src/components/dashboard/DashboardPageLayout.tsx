import { ReactNode } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import { sidebarNames } from '@/lib/constants'
import BaseLayout from '../layout/BaseLayout'
import DashboardHeader from './DashboardHeader'

export default function DashboardPageLayout({
	children,
}: {
	children: ReactNode
}) {
	const { appSidebar } = sidebarNames
	return (
		<SidebarProvider defaultOpen={[]} sidebarNames={[appSidebar]}>
			<div className="hidden md:w-[--sidebar-width-icon] md:shrink-0 md:flex">
				<AppSidebar name={appSidebar} openOnHover={true} />
			</div>
			<div className="flex-grow">
				<BaseLayout header={<DashboardHeader />}>{children}</BaseLayout>
			</div>
		</SidebarProvider>
	)
}
