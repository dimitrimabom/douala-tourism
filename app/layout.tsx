import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cameroun Tourisme",
  description: "Site du tourisme au Cameroun",
};

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}`}>
        <div className="bg-white text-gray-900 ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
