export type RouteParamKey =
	| 'course'
	| 'chapter'
	| 'section'
	| 'subsection'
	| 'collection'
	| 'exercise'
	| 'etude'

export type RouteParams = {
	course?: string
	chapter?: string
	section?: string
	subsection?: string
	collection?: string
	exercise?: string
	etude?: string
}
