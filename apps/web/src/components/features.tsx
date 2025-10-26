"use client";

import { useEffect, useState } from "react";
import {
	Card,
	Carousel,
	CarouselContext,
} from "@/components/ui/shadcn-io/apple-cards-carousel";

const features = [
	{
		src: process.env.NEXT_PUBLIC_MASTER_STACK_VIDEO_LOW!,
		title: "Master Stack Layout",
		category: "Feature",
		content: (
			<div>
				<p className="mb-4">
					Flexible window layouts with easy switching (scroller, master-stack,
					monocle, center-master, etc.)
				</p>
				<video
					src={process.env.NEXT_PUBLIC_MASTER_STACK_VIDEO!}
					controls
					preload="metadata"
					className="w-full rounded-lg"
				/>
			</div>
		),
	},
	{
		src: process.env.NEXT_PUBLIC_SCROLLER_LAYOUT_VIDEO_LOW!,
		title: "Scroller Layout",
		category: "Feature",
		content: (
			<div>
				<p className="mb-4">
					Smooth scrolling layout for managing multiple windows
				</p>
				<video
					src={process.env.NEXT_PUBLIC_SCROLLER_LAYOUT_VIDEO!}
					controls
					preload="metadata"
					className="w-full rounded-lg"
				/>
			</div>
		),
	},
	{
		src: process.env.NEXT_PUBLIC_LAYER_ANIMATION_VIDEO_LOW!,
		title: "Layer Animation",
		category: "Feature",
		content: (
			<div>
				<p className="mb-4">
					Smooth and customizable animations (window open/move/close, tag
					enter/leave, layer open/close/move)
				</p>
				<video
					src={process.env.NEXT_PUBLIC_LAYER_ANIMATION_VIDEO!}
					controls
					preload="metadata"
					className="w-full rounded-lg"
				/>
			</div>
		),
	},
];

export function Features() {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
		checkDesktop();
		window.addEventListener("resize", checkDesktop);
		return () => window.removeEventListener("resize", checkDesktop);
	}, []);

	return (
		<section id="features" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-balance font-bold text-4xl text-foreground sm:text-5xl">
						Powerful Features
					</h2>
					<p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
						In addition to basic WM functionality, MangoWC provides excellent
						xwayland support, base tags, smooth animations, rich window states
					</p>
				</div>

				{isDesktop ? (
					<Carousel
						items={features.map((feature, index) => (
							<Card key={feature.title} card={feature} index={index} layout />
						))}
					/>
				) : (
					<CarouselContext.Provider
						value={{ onCardClose: () => {}, currentIndex: 0 }}
					>
						<div className="grid grid-cols-1 gap-4">
							{features.map((feature, index) => (
								<Card key={feature.title} card={feature} index={index} layout />
							))}
						</div>
					</CarouselContext.Provider>
				)}
			</div>
		</section>
	);
}
