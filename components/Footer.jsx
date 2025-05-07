"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `hover:text-yellow-500 ${
      isActive(path) ? "text-yellow-500 font-semibold" : ""
    }`;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Section 1: Liens importants */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className={linkClass("/")}>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations">
                  <span className={linkClass("/destinations")}>
                    Destinations
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/culture">
                  <span className={linkClass("/culture")}>
                    Culture & Nature
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className={linkClass("/blog")}>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                Email :{" "}
                <Link
                  href="mailto:contact@camerountourisme.com"
                  className="hover:text-yellow-500"
                >
                  contact@camerountourisme.com
                </Link>
              </li>
              <li>
                Téléphone :{" "}
                <Link
                  href="tel:+237123456789"
                  className="hover:text-yellow-500"
                >
                  +237 6 97 47 31 15
                </Link>
              </li>
              <li>Adresse : Yaoundé, Cameroun</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Abonnez-vous à notre newsletter
            </h3>
            <p className="text-sm mb-4">
              Recevez les dernières nouvelles et offres exclusives sur les
              destinations camerounaises.
            </p>
            <form className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 rounded-md w-full text-gray-700"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-400 w-full lg:w-auto"
              >
                {"S'abonner"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Dimitri Mabom - AltPlus © 2025 Cameroun Tourisme. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
