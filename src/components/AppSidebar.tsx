import { RxHome, RxGear } from 'react-icons/rx'
import { PiBooksLight } from 'react-icons/pi'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'

const items = [
	{
		title: 'Home',
		url: '/app',
		icon: RxHome,
	},
	{
		title: 'Courses',
		url: '/course',
		icon: PiBooksLight,
	},
]

export default function AppSidebar({
	name,
	openOnHover,
}: {
	name: string
	openOnHover?: boolean
}) {
	return (
		<Sidebar name={name} openOnHover={openOnHover} collapsible="icon">
			<SidebarHeader>
				<Image
					src="/images/mad-logo.png"
					width={50}
					height={50}
					alt="logo"
					className="rounded-full"
				/>
			</SidebarHeader>
			<SidebarContent className="pt-24">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton className="h-10" asChild>
								<Link href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a href="#">
								<RxGear className="text-3xl" />
								<span>Settings</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
