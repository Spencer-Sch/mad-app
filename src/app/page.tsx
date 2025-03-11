import Link from 'next/link'

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Welcome to The MaD App</h1>
				<Link
					href={'/dashboard'}
					className="px-4 py-3 bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90"
				>
					To Dashboard
				</Link>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	)
}
