import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Page', () => {
	it('renders a heading', () => {
		render(<Page />)

		const heading = screen.getByRole('heading', { level: 1 })

		expect(heading).toBeInTheDocument()
	})

	it('renders with expected header text', () => {
		render(<Page />)

		const heading = screen.getByText('Welcome to The MaD App')

		expect(heading).toBeInTheDocument()
	})
})
