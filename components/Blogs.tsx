"use client";

import Image from "next/image";

export default function Blogs() {
    return (
        <section className="py-32 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-sky-400 tracking-tight mb-2">
                        Blogs
                    </h2>
                    <p className="text-zinc-500">Latest updates from around the globe</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <article className="bento-card rounded-xl overflow-hidden group cursor-pointer flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt="Greenland"
                            />
                            <div className="absolute top-4 left-4 bg-sky-500 text-white text-center p-2 rounded-lg shadow-lg">
                                <span className="block text-lg font-bold leading-none">28</span>
                                <span className="block text-[10px] uppercase font-medium">
                                    Nov
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-sky-400 transition-colors">
                                How DMCs in Greenland Are Building Year-Round Corporate Travel
                            </h3>
                            <p className="text-xs text-zinc-400 mb-6 line-clamp-3">
                                Beyond the Summer Rush, Greenland's Untapped Corporate Travel
                                Potential has long been associated with adventure...
                            </p>
                            <div className="mt-auto">
                                <button className="text-xs border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Blog Card 2 */}
                    <article className="bento-card rounded-xl overflow-hidden group cursor-pointer flex flex-col ring-1 ring-sky-500/20">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=600&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt="Iceland"
                            />
                            <div className="absolute top-4 left-4 bg-sky-500 text-white text-center p-2 rounded-lg shadow-lg">
                                <span className="block text-lg font-bold leading-none">12</span>
                                <span className="block text-[10px] uppercase font-medium">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-sky-400 transition-colors">
                                Midnight Sun vs. Northern Lights: Strategic Planning for MICE
                            </h3>
                            <p className="text-xs text-zinc-400 mb-6 line-clamp-3">
                                For global event planners, Iceland offers a rare advantage: two
                                dramatically different seasons that redefine...
                            </p>
                            <div className="mt-auto">
                                <button className="text-xs border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Blog Card 3 */}
                    <article className="bento-card rounded-xl overflow-hidden group cursor-pointer flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt="Hungary"
                            />
                            <div className="absolute top-4 left-4 bg-sky-500 text-white text-center p-2 rounded-lg shadow-lg">
                                <span className="block text-lg font-bold leading-none">09</span>
                                <span className="block text-[10px] uppercase font-medium">
                                    Dec
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-medium text-white mb-3 group-hover:text-sky-400 transition-colors">
                                Thermal Luxury: Why Partnering with a DMC in Hungary is Smart
                            </h3>
                            <p className="text-xs text-zinc-400 mb-6 line-clamp-3">
                                When it comes to designing high-impact European incentives for
                                2026, few destinations match Hungary's balance...
                            </p>
                            <div className="mt-auto">
                                <button className="text-xs border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer"></span>
                </div>
            </div>
        </section>
    );
}
