import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
