import DashboardCard from '@/components/dashboard/card/DashboardCard'
import WelcomeCardContent from '@/components/dashboard/card/WelcomeCardContent'

export default function DashboardHome() {
	return (
		<div className="grid grid-cols-1 gap-4">
			<DashboardCard
				title="Welcome to The MaD App!"
				content={<WelcomeCardContent />}
			/>
		</div>
	)
}
