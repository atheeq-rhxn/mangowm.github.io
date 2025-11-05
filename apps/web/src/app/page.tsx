import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { VideoTutorial } from "@/components/video-tutorial";

export default function Home() {
	return (
		<main id="main" className="min-h-screen bg-background">
			<Header />
			<Hero />
			<VideoTutorial />
			<Highlights />
			<Footer />
		</main>
	);
}
