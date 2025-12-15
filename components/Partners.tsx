"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Partners() {
    return (
        <section className="py-20 px-6 bg-white/[0.95]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Our <span className="text-sky-500">Partners</span>
                    </h3>
                    <div className="mb-6">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                            alt="Secluded Africa"
                            className="h-16 w-auto object-contain mb-4 grayscale hover:grayscale-0 transition-all"
                        />
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Secluded Africa owns and manages exclusive and barefoot luxury
                            lodges in Kenya and South Africa. With a complete focus on
                            Wildlife and Nature Conservation.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-colors cursor-pointer">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-colors cursor-pointer">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?q=80&w=400&auto=format&fit=crop"
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-32 w-full object-cover"
                        alt="Partner 1"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400&auto=format&fit=crop"
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-32 w-full object-cover"
                        alt="Partner 2"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=400&auto=format&fit=crop"
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-32 w-full object-cover"
                        alt="Partner 3"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400&auto=format&fit=crop"
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-32 w-full object-cover"
                        alt="Partner 4"
                    />
                </div>
            </div>
        </section>
    );
}
