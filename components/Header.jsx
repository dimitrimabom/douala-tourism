import React from "react";
import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";
import { MenuIcon } from "lucide-react";

const dMSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span
            className={`${dMSerifText.className} text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition`}
          >
            Cameroun Tourisme
          </span>
        </Link>

        {/* Menu de navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Accueil
            </span>
          </Link>
          <Link href="/destinations">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Destinations
            </span>
          </Link>
          <Link href="/culture">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Culture & Nature
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Blog
            </span>
          </Link>
          {/* <Link href="/planifier">
                  <span className="text-lg text-gray-700 hover:text-yellow-500">Planifier</span>
                </Link> */}
          {/* <div className="relative">
                  <button className="text-lg text-gray-700 hover:text-yellow-500">
                    Langues
                  </button>
                  <div className="hidden absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md">
                    <Link href="/fr">
                      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Français
                      </span>
                    </Link>
                    <Link href="/en">
                      <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        English
                      </span>
                    </Link>
                  </div>
                </div> */}
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden relative">
          <button
            className="text-2xl text-gray-700 hover:text-yellow-500"
            aria-label="Menu"
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
        {/* <nav className="flex md:hidden flex-col absolute bg-white w-screen top-16 left-0 gap-2 p-4">
          <Link href="/">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Accueil
            </span>
          </Link>
          <Link href="/destinations">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Destinations
            </span>
          </Link>
          <Link href="/culture">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Culture & Nature
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-lg text-gray-700 hover:text-yellow-500">
              Blog
            </span>
          </Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
