import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";

export default function Home() {
	return (
		<main id="main" className="min-h-screen bg-background">
			<Header />
			<div className="sticky top-[70px] z-40 border-primary/20 border-b bg-primary/90 py-2 text-center font-medium text-primary-foreground text-sm backdrop-blur-sm">
				We've migrated to{" "}
				<a
					href="https://mangowm.github.io"
					className="underline underline-offset-2 hover:text-primary-foreground/80"
				>
					https://mangowm.github.io
				</a>
			</div>
			<Hero />
			<Highlights />
			<Footer />
		</main>
	);
}
