import AppHome from '@/components/app/AppHome'
import { metaDescription } from '@/lib/meta'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'MaD App',
	description: metaDescription,
}

export default function AppPage() {
	return <AppHome />
}
