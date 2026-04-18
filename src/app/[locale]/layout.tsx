import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import LanguagePicker from "@/components/LanguagePicker";
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return {
    title: locale === 'ru' ? "Будь Здоров — Твой путь к благополучию" : "Bud Zdorov — Your path to well-being",
    description: locale === 'ru' ? "Здоровый образ жизни и чистое питание" : "Healthy lifestyle and clean eating",
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

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
