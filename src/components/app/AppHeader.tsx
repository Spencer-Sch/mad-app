import { SidebarTrigger } from '../ui/sidebar'
import { sidebarNames } from '@/lib/constants'

export default function AppHeader() {
	const { appSidebar } = sidebarNames
	return (
		<header className="w-full h-[--layout-header-height] flex justify-between items-center px-4 font-bold text-3xl">
			<h1>Hello, Drummer! 👋</h1>
			<SidebarTrigger
				name={appSidebar}
				className="flex md:hover-device:hidden"
			/>
		</header>
	)
}
