import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { RouteParams, RouteParamKey } from '@/types'

/**
 * Combines multiple class values using clsx, then resolves
 * Tailwind CSS class conflicts using tailwind-merge.
 *
 * @param inputs - Class values to be combined (strings, objects, arrays, etc.)
 * @returns A merged className string
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs))
}

/**
 * used in validateRouteUUIDs() to validate UUID
 *
 * @param uuid - uuid string for validation
 * @returns - boolean
 */

function isValidUUID(uuid: string) {
	if (!uuid) return false

	// Regular expression for UUID validation (version 1-5)
	const uuidRegex =
		/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

	return uuidRegex.test(uuid)
}

/**
 * Checks ids from route params to verify that each is a valid UUID.
 * If the given id is not a valid UUID, returns error identifying
 * which id is invalid.
 *
 * @param RouteParams - an object with key/value pairs where KEY is a route
 * segment name (e.g. course, chapter, section, etc.) and the VALUE is the
 * UUID passed in via the route params.
 * @returns - { allValid: boolean, invalidKey: string }
 * `allValid` is only true if all UUIDs pass validation.
 * `invalidKey` will be the key paired to the first UUID that fails
 * its validation check.
 */

export function validateRouteUUIDs(RouteParams: RouteParams): {
	allValid: boolean
	invalidKey: string | null
} {
	const segmentKeys = Object.keys(RouteParams) as RouteParamKey[]

	if (segmentKeys.length === 0) {
		return { allValid: true, invalidKey: null }
	}

	for (const key of segmentKeys) {
		if (RouteParams[key] === undefined) continue

		const isValid = isValidUUID(RouteParams[key]!)

		if (!isValid) {
			return { allValid: false, invalidKey: key }
		}
	}

	return { allValid: true, invalidKey: null }
}
