import DashboardPageLayout from '@/components/dashboard/DashboardPageLayout'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return <DashboardPageLayout>{children}</DashboardPageLayout>
}
