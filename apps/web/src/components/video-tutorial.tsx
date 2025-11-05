"use client";

import { Badge } from "@/components/ui/badge";

export function VideoTutorial() {
	return (
		<section id="tutorial" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-balance font-bold text-4xl text-foreground sm:text-5xl">
						Video Tutorial
					</h2>
					<div className="mb-6 inline-block">
						<Badge
							variant="outline"
							className="px-4 py-2 text-xl font-mono font-semibold text-primary border-primary/30"
						>
							by Tony
						</Badge>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="w-full max-w-4xl aspect-video">
						<iframe
							src="https://www.youtube.com/embed/Q1Jgw_q0gWE"
							title="MangoWC Tutorial by Tony"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="w-full h-full rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
