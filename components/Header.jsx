"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Serif_Text } from "next/font/google";
import { MenuIcon, X } from "lucide-react";

const dMSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/destinations", label: "Destinations" },
    { href: "/culture", label: "Culture & Nature" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span
            className={`${dMSerifText.className} text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition`}
          >
            Cameroun Tourisme
          </span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-lg ${
                  isActive(link.href)
                    ? "text-yellow-500 font-semibold"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-yellow-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile visible si ouvert */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-white w-full px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              <span
                className={`text-lg ${
                  isActive(link.href)
                    ? "text-yellow-500 font-semibold"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
