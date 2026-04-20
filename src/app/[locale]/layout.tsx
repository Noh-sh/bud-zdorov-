import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import LanguagePicker from "@/components/LanguagePicker";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Будь Здоров — Твой путь к благополучию",
  description: "Здоровый образ жизни и чистое питание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable} ${outfit.variable} h-full`}>
      <body className="h-full antialiased font-sans select-none">
        <div className="app-container">
          <Logo />
          <LanguagePicker />
          <Navbar />
          <main className="app-content pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
