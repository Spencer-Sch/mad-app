'use client'
import { RxReader } from 'react-icons/rx'

import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/use-mobile'

const items = [
	{
		title: 'Chapter 1',
		url: '#',
		icon: RxReader,
	},
	{
		title: 'Chapter 2',
		url: '#',
		icon: RxReader,
	},
]

export default function CoursSidebar({ name }: { name: string }) {
	const isMobile = useIsMobile()
	return (
		<Sidebar
			name={name}
			collapsible={isMobile ? 'offcanvas' : 'none'}
			variant="inset"
		>
			<SidebarHeader>Making a Drummer</SidebarHeader>
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
		</Sidebar>
	)
}
