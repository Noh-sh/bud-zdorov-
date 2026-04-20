import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import LanguagePicker from "@/components/LanguagePicker";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Будь Здоров — Твой путь к благополучию",
  description: "Здоровый образ жизни и чистое питание",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable} ${outfit.variable} h-full`}>
      <body className="h-full antialiased font-sans select-none">
        <NextIntlClientProvider messages={messages}>
          <div className="app-container">
            <Logo />
            <LanguagePicker />
            <Navbar />
            <main className="app-content pt-24">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
