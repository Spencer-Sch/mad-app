import { ReactNode } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import { sidebarNames } from '@/lib/constants'
import BaseLayout from '../layout/BaseLayout'
import AppHeader from './AppHeader'
import Container from '@/components/layout/Container'

export default function AppPageLayout({ children }: { children: ReactNode }) {
	const { appSidebar } = sidebarNames
	return (
		<SidebarProvider defaultOpen={[]} sidebarNames={[appSidebar]}>
			<div className="touch-device:hidden md:hover-device:w-[--sidebar-width-icon] md:hover-device:shrink-0 md:hover-device:flex">
				<AppSidebar name={appSidebar} openOnHover={true} />
			</div>
			<div className="flex-grow">
				<BaseLayout header={<AppHeader />}>
					<Container>{children}</Container>
				</BaseLayout>
			</div>
		</SidebarProvider>
	)
}
