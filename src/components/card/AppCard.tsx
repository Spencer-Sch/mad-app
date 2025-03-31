import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ReactNode } from 'react'

interface Props {
	title: string
	description?: string
	content: ReactNode
	footer?: ReactNode
	isLoading?: boolean
}

export default function AppCard({
	title,
	content,
	description,
	footer,
	isLoading,
}: Props) {
	if (isLoading) {
		return <Card className="w-full">{/* Loading skeleton here */}</Card>
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-2xl">
					{title ? title : 'Card Title'}
				</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			{content ? content : <CardContent>Content, content, content</CardContent>}
			{footer && footer}
		</Card>
	)
}
