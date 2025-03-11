import { SidebarTrigger } from '../ui/sidebar'
import { sidebarNames } from '@/lib/constants'

export default function DashboardHeader() {
	const { appSidebar } = sidebarNames
	return (
		<header className="w-full h-[--layout-header-height]">
			<h1>Dashboard Header</h1>
			<SidebarTrigger name={appSidebar} className="flex md:hidden" />
		</header>
	)
}
