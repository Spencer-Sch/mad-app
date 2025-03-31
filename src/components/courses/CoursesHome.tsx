import CourseCard from '@/components/card/CourseCard'
import { getCourses } from '@/mad-api/coursesApi'

export default async function CoursesHome() {
	const courses = await getCourses()

	return (
		<div className="grid grid-cols-2 gap-4">
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					description={course.description}
					image="/images/mad-cover.jpg"
					altText={course.title}
				/>
			))}
		</div>
	)
}
