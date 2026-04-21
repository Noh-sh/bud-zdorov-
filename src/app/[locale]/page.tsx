import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:items-center px-6 py-12 lg:p-24 animate-fade relative overflow-hidden">
      
      {/* Hero Image Section (First on mobile) */}
      <div className="relative h-[40vh] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full pointer-events-none select-none order-first lg:order-none mb-8 lg:mb-0">
        <div className="relative h-full w-full">
          {/* Mask for Desktop (Gradient from left) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f0fdf4] via-transparent to-transparent hidden lg:block" />
          {/* Mask for Mobile (Gradient from bottom) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f0fdf4] via-transparent to-transparent lg:hidden" />
          
          <Image
            src="/deep-breath-v2.png"
            alt="Deep Breath - Health and Vitality"
            fill
            className="object-cover object-center opacity-70 lg:opacity-80"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-4xl animate-slide-up z-10 relative lg:ml-auto">
        <h1 className="font-playfair text-5xl lg:text-[11rem] font-black tracking-[-0.05em] leading-[0.9] lg:leading-[0.8] mb-8 lg:mb-12 bg-gradient-to-br from-emerald-400 via-emerald-700 to-emerald-950 bg-clip-text text-transparent">
          {t("heroTitle1")}<br />{t("heroTitle2")}
        </h1>
        <p className="text-xl lg:text-2xl font-medium max-w-lg leading-relaxed bg-gradient-to-br from-emerald-600 to-emerald-950 bg-clip-text text-transparent opacity-90 font-outfit">
          {t("heroSubtitle")}
        </p>
      </div>

    </div>
  );
}
