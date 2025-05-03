"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();
  const segments = pathname.split("/").filter((segment) => segment);

  // Si on est à la racine, on n'affiche rien
  if (segments.length === 0) return null;

  return (
    <nav
      aria-label="breadcrumb"
      className="relative z-10 p-4 mt-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between">
        <div className="mb-2">
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:underline text-sm flex items-center"
          >
            <ChevronLeft />
            <span>Back</span>
          </button>
        </div>
        <ol className="flex flex-wrap text-sm text-gray-600">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Accueil
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;
            const label = decodeURIComponent(segment)
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <li key={href} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="text-gray-800 font-semibold truncate max-w-[200px]">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="text-blue-600 hover:underline">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
