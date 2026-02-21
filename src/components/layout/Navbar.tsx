"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/company", label: "Company" },
    { href: "/brands", label: "Brands" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 메뉴 열릴 때 body 스크롤 잠금
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || menuOpen
                ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-bold tracking-tighter text-foreground"
                    onClick={() => setMenuOpen(false)}
                >
                    GREENITY CORPORATION INC<span className="text-greenity">.</span>
                </Link>

                {/* 데스크탑 메뉴 */}
                <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className="hover:text-greenity transition-colors duration-300">
                            {label}
                        </Link>
                    ))}
                </div>

                {/* 햄버거 / X 버튼 */}
                <button
                    className="md:hidden p-1 focus:outline-none"
                    aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* 모바일 드롭다운 메뉴 */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="container mx-auto px-6 pb-6 pt-4 flex flex-col space-y-5">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm font-medium uppercase tracking-widest hover:text-greenity transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
