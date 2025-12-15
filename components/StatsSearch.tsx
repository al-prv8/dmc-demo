"use client";

import { Search } from "lucide-react";

export default function StatsSearch() {
    return (
        <section className="relative z-20 -mt-20 px-6">
            <div className="max-w-6xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden relative">
                {/* Skyline Silhouette (CSS simulated) */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-[url('https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/building-2.svg')] bg-repeat-x opacity-5 bg-[length:40px_40px]"></div>

                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-medium text-white tracking-tight">
                            LIBERTY INTERNATIONAL TOURISM GROUP
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">
                            The largest privately owned Destination Management Company (DMC)
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8 border-b border-white/5 pb-8">
                        <div>
                            <div className="text-2xl font-bold text-orange-500">120+</div>
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                                Destinations
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-orange-500">35+</div>
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                                Sales Representatives
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-orange-500">75+</div>
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                                Languages
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-orange-500">10k+</div>
                            <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                                Premium Events
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Search For Our Destinations..."
                                className="w-full bg-black/40 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-600"
                            />
                        </div>
                        <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] whitespace-nowrap cursor-pointer">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
