import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Props {
	id: string
	title: string
	description?: string | null
	image: string
	altText: string
	isLoading?: boolean | null
}

export default function CourseCard({
	id,
	title,
	description,
	image,
	altText,
	isLoading,
}: Props) {
	if (isLoading) {
		return <Card className="w-full">{/* Loading skeleton here */}</Card>
	}

	return (
		<Card className="w-full min-h-52 flex justify-between overflow-hidden border-0">
			<div className="h-full flex flex-col justify-between space-y-4">
				<CardHeader>
					<CardTitle className="text-2xl">
						{title ? title : 'Card Title'}
					</CardTitle>
					{description && <CardDescription>{description}</CardDescription>}
				</CardHeader>

				<CardContent className="flex flex-col">
					<Button asChild>
						<Link href={`courses/${id}`}>Enter Course</Link>
					</Button>
				</CardContent>
			</div>
			<div className="relative h-full min-w-[157px]">
				<Image
					fill
					src={image}
					alt={altText ?? 'Course Cover Image'}
					className="object-cover"
					sizes="(max-width: 768px) 100vw, 300px"
				/>
			</div>
		</Card>
	)
}
