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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Greenland */}
                    <div className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-100 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                            alt="Greenland"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase">
                            GRL — 71.7°N
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                <div>
                                    <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block">Corporate</span>
                                    <h3 className="text-xl font-medium text-white tracking-tight">Greenland DMCs</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Iceland */}
                    <div className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-200 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                            alt="Iceland"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase">
                            ISL — 64.9°N
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                <div>
                                    <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block">MICE Planning</span>
                                    <h3 className="text-xl font-medium text-white tracking-tight">Iceland Strategy</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Hungary */}
                    <div className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-300 cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                            alt="Hungary"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase">
                            HUN — 47.1°N
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-end justify-between border-t border-white/10 pt-4">
                                <div>
                                    <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block">Luxury Incentives</span>
                                    <h3 className="text-xl font-medium text-white tracking-tight">Thermal Hungary</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4">
                                        <path d="M7 7h10v10"></path>
                                        <path d="M7 17 17 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
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
