import React, { ReactNode } from 'react'
import { SidebarInset } from '@/components/ui/sidebar'

interface BaseLayoutProps {
	header: ReactNode
	children: ReactNode
}

export default function BaseLayout({ header, children }: BaseLayoutProps) {
	return (
		<div className="w-full flex flex-col">
			{header}
			{/* override 'min-h-svh' in `SidebarInset` component with 'min-h-fit' */}
			<SidebarInset className="min-h-fit">
				<div className="h-[calc(100svh-var(--layout-header-height))] overflow-y-auto bg-blue-200">
					{children}
				</div>
			</SidebarInset>
		</div>
	)
}
