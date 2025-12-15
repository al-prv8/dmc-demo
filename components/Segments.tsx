"use client";

import { Users, Palmtree } from "lucide-react";
import Image from "next/image";

export default function Segments() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-sky-400 tracking-tight uppercase mb-4">
                        Segments
                    </h2>
                    <div className="w-24 h-1 bg-sky-500/30 mx-auto rounded-full"></div>
                </div>

                {/* Custom Bento Grid Layout matches image */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                    {/* Tall Card 1: MICE */}
                    <div className="relative group md:row-span-2 rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="MICE"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-sky-500 rounded-lg">
                                    <Users className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">MICE</h3>
                            </div>
                            <p className="text-xs text-zinc-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                Meetings, Incentives, Conferences, and Exhibitions tailored to
                                your corporate needs.
                            </p>
                        </div>
                    </div>

                    {/* Tall Card 2: Premium Leisure */}
                    <div className="relative group md:row-span-2 rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt="Leisure"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-amber-500 rounded-lg">
                                    <Palmtree className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Premium Leisure
                                </h3>
                            </div>
                            <p className="text-xs text-zinc-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                Curated luxury experiences for the discerning traveler.
                            </p>
                        </div>
                    </div>

                    {/* Stacked Column */}
                    <div className="flex flex-col gap-6 md:row-span-2 h-full">
                        {/* Cruise */}
                        <div className="relative group flex-1 rounded-2xl overflow-hidden border border-white/10 min-h-[140px]">
                            <img
                                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Cruise"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-lg font-bold text-white mb-1">Cruise</h3>
                                <div className="h-0.5 w-8 bg-sky-500 group-hover:w-16 transition-all"></div>
                            </div>
                        </div>

                        {/* Sports */}
                        <div className="relative group flex-1 rounded-2xl overflow-hidden border border-white/10 min-h-[140px]">
                            <img
                                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Sports"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-lg font-bold text-white mb-1">Sports</h3>
                                <div className="h-0.5 w-8 bg-orange-500 group-hover:w-16 transition-all"></div>
                            </div>
                        </div>

                        {/* Aircraft */}
                        <div className="relative group flex-1 rounded-2xl overflow-hidden border border-white/10 min-h-[140px]">
                            <img
                                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Aircraft"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-lg font-bold text-white mb-1">Aircraft</h3>
                                <div className="h-0.5 w-8 bg-purple-500 group-hover:w-16 transition-all"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
