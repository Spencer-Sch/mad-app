import AppCard from '@/components/card/AppCard'
import WelcomeCardContent from '@/components/card/app/WelcomeCardContent'

export default function AppHome() {
	return (
		<div className="grid grid-cols-1 gap-4">
			<AppCard
				title="Welcome to The MaD App!"
				content={<WelcomeCardContent />}
			/>
		</div>
	)
}
