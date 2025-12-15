"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-zinc-400 py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-black font-bold">
                            L
                        </div>
                        <span className="text-white font-bold text-sm">
                            LIBERTY INTERNATIONAL
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                        >
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-colors"
                        >
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                        >
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link
                            href="#"
                            className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                        </Link>
                    </div>
                    <p className="text-[10px] text-zinc-600">
                        © Liberty Germany GmbH
                        <br />
                        F.W. Raiffeisenstrasse 15061
                        <br />
                        Elsbethen, Salzburg Austria
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-orange-500 font-bold mb-6 uppercase tracking-wider">
                        Quick Links
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "Home",
                            "About Us",
                            "Segments",
                            "Blogs",
                            "Contact Us",
                            "Careers",
                            "Legal Notice",
                            "Privacy Policy",
                            "Terms & Conditions",
                            "Suppliers Code Of Conduct",
                        ].map((link) => (
                            <li key={link}>
                                <Link
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Destinations */}
                <div>
                    <h4 className="text-orange-500 font-bold mb-6 uppercase tracking-wider">
                        Destinations in Focus
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {[
                            "Albania",
                            "Andorra",
                            "Angola",
                            "Argentina",
                            "Armenia",
                            "Austria",
                            "Azerbaijan",
                            "Belize",
                            "Bhutan",
                            "Bolivia",
                            "Botswana",
                            "Brazil",
                            "Cambodia",
                            "Canada",
                            "China",
                            "Colombia",
                        ].map((country) => (
                            <Link
                                href="#"
                                key={country}
                                className="hover:text-white transition-colors"
                            >
                                {country}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 className="text-orange-500 font-bold mb-6 uppercase tracking-wider">
                        Subscribe to Our Newsletter
                    </h4>
                    <p className="mb-4 text-[10px] leading-relaxed">
                        Stay tuned with latest industry insights, destination guides, MICE
                        packages and much more
                    </p>
                    <form className="space-y-3 mb-8">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-white px-3 py-2 rounded text-black text-xs"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-white px-3 py-2 rounded text-black text-xs"
                        />
                        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded font-bold transition-colors cursor-pointer">
                            Subscribe Now
                        </button>
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                className="mt-0.5 bg-zinc-800 border-zinc-700"
                            />
                            <span className="text-[10px] text-zinc-500">
                                I agree to receive marketing communications...
                            </span>
                        </div>
                    </form>

                    <h4 className="text-zinc-500 font-bold mb-4 uppercase text-[10px]">
                        We are members of
                    </h4>
                    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <span className="text-xl font-bold text-white">site</span>
                        <span className="text-xl font-bold text-white">USTOA</span>
                        <span className="text-xl font-bold text-white">ETOA</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-[10px] text-zinc-600">
                Powered by <span className="text-white font-bold">CREATORS NETWORK</span>
            </div>
        </footer>
    );
}
