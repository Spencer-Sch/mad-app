import AppPageLayout from '@/components/app/AppPageLayout'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
	return <AppPageLayout>{children}</AppPageLayout>
}
