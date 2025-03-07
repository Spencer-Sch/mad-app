import { metaDescription } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'MaD App | Dashboard',
	description: metaDescription,
}

export default function DashboardPage() {
	return (
		<>
			<p>DashboardPage</p>
			{/* <DashboardHome /> */}
		</>
	)
}
