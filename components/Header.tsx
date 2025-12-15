"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-panel h-20 border-b-0">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-lg flex items-center justify-center text-black font-bold text-xs shadow-lg shadow-orange-500/20">
                        <span className="transform -rotate-12">L</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold tracking-tight text-white leading-none">
                            LIBERTY
                        </span>
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
                            International
                        </span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#"
                        className="text-xs font-medium text-white hover:text-orange-400 transition-colors"
                    >
                        Destinations
                    </Link>
                    <Link
                        href="#"
                        className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        Segments
                    </Link>
                    <Link
                        href="#"
                        className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        Blog
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer">
                        <span>Contact</span>
                        <ArrowRight className="w-3 h-3" />
                    </button>
                    <div className="md:hidden text-white cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
