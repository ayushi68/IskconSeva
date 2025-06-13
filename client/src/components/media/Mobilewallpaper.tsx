import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";

const wallpapersLatest = [
	{
		title: "Divine Pulse",
		date: "May 2025",
		tag: "Portrait",
		image: "/mobile/divine-pulse.jpg",
	},
	{
		title: "Divine Love",
		date: "May 2025",
		tag: "Portrait",
		image: "/mobile/divine-love.jpg",
	},
	{
		title: "Sacred Temple",
		date: "May 2025",
		tag: "Portrait",
		image: "/mobile/temple.jpg",
	},
	{
		title: "May Calendar",
		date: "May 2025",
		tag: "Calendar",
		image: "/mobile/may-calendar.jpg",
	},
	{
		title: "Daily Inspiration",
		date: "May 2025",
		tag: "Quote",
		image: "/mobile/inspiration.jpg",
	},
];

const wallpapersArchive = [
	{
		title: "Spring Joy",
		date: "Apr 2025",
		tag: "Portrait",
		image: "/mobile/spring.jpg",
	},
	{
		title: "Love Divine",
		date: "Mar 2025",
		tag: "Krishna",
		image: "/mobile/love.jpg",
	},
	{
		title: "New Year",
		date: "Jan 2025",
		tag: "Calendar",
		image: "/mobile/newyear.jpg",
	},
	{
		title: "Winter Peace",
		date: "Dec 2024",
		tag: "Portrait",
		image: "/mobile/winter.jpg",
	},
	{
		title: "Gratitude",
		date: "Nov 2024",
		tag: "Quote",
		image: "/mobile/gratitude.jpg",
	},
	{
		title: "Festival",
		date: "Oct 2024",
		tag: "Krishna",
		image: "/mobile/festival.jpg",
	},
	{
		title: "Devotion",
		date: "Sep 2024",
		tag: "Portrait",
		image: "/mobile/devotion.jpg",
	},
];

export default function MobileWallpaper() {
	const [activeFilter, setActiveFilter] = useState<
		"all" | "portrait" | "calendar" | "krishna"
	>("all");

	const handleFilterClick = (
		filter: "all" | "portrait" | "calendar" | "krishna"
	) => {
		setActiveFilter(filter);
	};

	// Filter wallpapers based on activeFilter
	const filteredWallpapersLatest =
		activeFilter === "all" ||
		activeFilter ===
			wallpapersLatest.find((w) => w.tag.toLowerCase() === activeFilter)
				?.tag.toLowerCase()
			? wallpapersLatest.filter(
					(w) => activeFilter === "all" || w.tag.toLowerCase() === activeFilter
			  )
			: [];
	const filteredWallpapersArchive =
		activeFilter === "all" ||
		activeFilter ===
			wallpapersArchive.find((w) => w.tag.toLowerCase() === activeFilter)
				?.tag.toLowerCase()
			? wallpapersArchive.filter(
					(w) => activeFilter === "all" || w.tag.toLowerCase() === activeFilter
			  )
			: [];

	return (
		<div className="bg-gradient-to-b from-amber-50 via-amber-100 to-white min-h-screen pb-20 text-center">
			{/* Header Section */}
			<header className="bg-[url('')] bg-cover bg-center text-white py-16 px-4 relative">
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
				<div className="relative">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Devotional{" "}
						<span className="text-yellow-400">Mobile</span> Wallpapers
					</h1>
					<p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
						Carry Krishna’s blessings with you everywhere through beautiful mobile
						wallpapers and spiritual calendar backgrounds
					</p>
					<p className="mt-4 text-sm md:text-base">
						<span className="bg-yellow-400 text-black py-2 px-4 rounded-full inline-block font-semibold">
							📱 Portrait Format – Optimized for All Devices
						</span>
					</p>
				</div>
			</header>

			{/* Filter and Search Section */}
			<div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
				<Button
					variant={activeFilter === "all" ? "default" : "secondary"}
					className={`${
						activeFilter === "all"
							? "bg-orange-500 text-white hover:bg-orange-600"
							: "bg-orange-100 text-orange-600 hover:bg-orange-200"
					} rounded-full px-6 py-2 font-semibold transition-all duration-300`}
					onClick={() => handleFilterClick("all")}
				>
					All Mobile Wallpapers
				</Button>
				<Button
					variant={activeFilter === "portrait" ? "default" : "outline"}
					className={`${
						activeFilter === "portrait"
							? "bg-orange-500 text-white hover:bg-orange-600"
							: "border-orange-300 text-orange-600 hover:bg-orange-100"
					} rounded-full px-6 py-2 font-semibold transition-all duration-300`}
					onClick={() => handleFilterClick("portrait")}
				>
					📱 Portrait
				</Button>
				<Button
					variant={activeFilter === "calendar" ? "default" : "outline"}
					className={`${
						activeFilter === "calendar"
							? "bg-orange-500 text-white hover:bg-orange-600"
							: "border-orange-300 text-orange-600 hover:bg-orange-100"
					} rounded-full px-6 py-2 font-semibold transition-all duration-300`}
					onClick={() => handleFilterClick("calendar")}
				>
					📆 Calendar
				</Button>
				<Button
					variant={activeFilter === "krishna" ? "default" : "outline"}
					className={`${
						activeFilter === "krishna"
							? "bg-orange-500 text-white hover:bg-orange-600"
							: "border-orange-300 text-orange-600 hover:bg-orange-100"
					} rounded-full px-6 py-2 font-semibold transition-all duration-300`}
					onClick={() => handleFilterClick("krishna")}
				>
					🕉️ Krishna
				</Button>
				<div className="flex items-center border border-gray-200 rounded-full px-3 py-2 bg-white shadow-md">
					<Search className="h-5 w-5 mr-2 text-gray-500" />
					<Input
						placeholder="Search mobile wallpapers..."
						className="border-none p-1 text-sm w-40 focus:ring-0"
					/>
				</div>
			</div>

			{/* Latest Collection */}
			{filteredWallpapersLatest.length > 0 && (
				<section className="mt-12 px-4">
					<h2 className="text-2xl font-semibold text-red-900 tracking-tight">
						May 2025 - Latest Collection
					</h2>
					<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
						{filteredWallpapersLatest.map((item, idx) => (
							<div
								key={idx}
								className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[200px] transform hover:-translate-y-1 transition-all duration-300"
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-[230px] object-cover rounded-t-2xl"
								/>
								<div className="p-4">
									<p className="text-xs font-medium text-orange-600">
										{item.date}
									</p>
									<p className="text-xs text-gray-500 mb-2">
										{item.tag}
									</p>
									<p className="text-sm font-semibold text-gray-800 mb-3">
										{item.title}
									</p>
									<Button
										size="sm"
										className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
									>
										<Download className="h-4 w-4" /> Download
									</Button>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* Archive Collection */}
			{filteredWallpapersArchive.length > 0 && (
				<section className="mt-16 px-4">
					<h2 className="text-2xl font-semibold text-red-900 tracking-tight">
						Archive Collection
					</h2>
					<div className="mt-6 flex flex-wrap justify-center gap-6">
						{filteredWallpapersArchive.map((item, idx) => (
							<div
								key={idx}
								className="bg-white shadow-lg rounded-2xl overflow-hidden w-[160px] transform hover:-translate-y-1 transition-all duration-300"
							>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-[180px] object-cover rounded-t-2xl"
								/>
								<div className="p-4">
									<p className="text-xs font-medium text-orange-600">
										{item.date}
									</p>
									<p className="text-xs text-gray-500 mb-2">
										{item.tag}
									</p>
									<p className="text-sm font-semibold text-gray-800 mb-3">
										{item.title}
									</p>
									<Button
										size="sm"
										className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
									>
										<Download className="h-4 w-4" /> Download
									</Button>
								</div>
							</div>
						))}
					</div>
				</section>
			)}
		</div>
	);
};