import { RxHome } from 'react-icons/rx'
import Link from 'next/link'
import { SidebarTrigger } from '../ui/sidebar'
import { sidebarNames } from '@/lib/constants'
import { buttonVariants } from '@/components/ui/button'

export default function CourseHeader() {
	const { courseSidebar } = sidebarNames
	return (
		<header className="w-full h-[--layout-header-height]">
			<h1>Course Header</h1>
			<div className="flex justify-between md:hover-device:hidden">
				<SidebarTrigger name={courseSidebar} />
				<Link
					href="/app"
					className={buttonVariants({ variant: 'ghost', size: 'icon' })}
				>
					<RxHome />
					<span className="sr-only">Go Home</span>
				</Link>
			</div>
		</header>
	)
}
