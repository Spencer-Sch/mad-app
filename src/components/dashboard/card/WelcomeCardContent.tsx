import { CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function WelcomeCardContent() {
	return (
		<CardContent className="space-y-4">
			<p className="font-bold text-lg">Project Status</p>
			<p>
				🚧 Work in Progress - This application is actively being developed.
				Please excuse any rough edges you might encounter as I continue to
				improve the experience.
			</p>
			<p className="font-bold text-lg">Feedback Welcome!</p>
			<p>
				📝 I&apos;d love to hear from you! Please send feedback about any issues
				you encounter or features you&apos;d like to see in future updates to
				[ENTER FEEDBACK EMAIL ADDRESS HERE].
			</p>
			<p>
				Ready to start your drumming journey?{' '}
				<Link href="/course" className="text-blue-500 underline">
					Go To The Course →
				</Link>
			</p>
		</CardContent>
	)
}
