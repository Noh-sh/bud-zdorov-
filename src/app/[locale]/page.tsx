import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex-1 grid lg:grid-cols-2 lg:items-center p-12 lg:p-24 animate-fade relative overflow-hidden">
      {/* Text Content */}
      <div className="max-w-4xl animate-slide-up z-10 relative">
        <h1 className="font-playfair text-7xl lg:text-[11rem] font-black tracking-[-0.05em] leading-[0.8] mb-12 bg-gradient-to-br from-emerald-400 via-emerald-700 to-emerald-950 bg-clip-text text-transparent">
          {t("heroTitle1")}<br />{t("heroTitle2")}
        </h1>
        <p className="text-xl lg:text-2xl font-medium max-w-lg leading-relaxed bg-gradient-to-br from-emerald-600 to-emerald-950 bg-clip-text text-transparent opacity-90 font-outfit">
          {t("heroSubtitle")}
        </p>
      </div>

      {/* Hero Image Section */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none select-none">
        <div className="relative h-full w-full">
          {/* Subtle Mask to blend image into the green background */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f0fdf4] via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f0fdf4] via-transparent to-transparent lg:hidden" />
          
          <Image
            src="/deep-breath-v2.png"
            alt="Deep Breath - Health and Vitality"
            fill
            className="object-cover object-center opacity-60 lg:opacity-80"
            priority
          />
        </div>
      </div>
    </div>
  );
}
