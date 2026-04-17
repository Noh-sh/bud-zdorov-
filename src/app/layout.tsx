import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });

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
    <html lang="ru" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="h-full antialiased font-sans select-none">
        <div className="app-container">
          <Navbar />
          <main className="app-content pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
