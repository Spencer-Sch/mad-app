import { supabase } from '../../client'
import courseData from '../../../data/courses.json'
import { BaseSeeder } from './baseSeeder'
import { SeedCourse, Course } from '../../../types'

export class CourseSeeder extends BaseSeeder<SeedCourse, Course> {
	constructor() {
		super(supabase, 'courses', courseData)
		// No foreign keys for courses
		this.foreignKeys = []
	}
}

export const courseSeeder = new CourseSeeder()
