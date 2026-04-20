"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import React from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function LanguagePicker() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    console.log("Switching to:", newLocale, "from:", locale);
    console.log("Current pathname:", pathname);
    try {
      router.push(pathname, { locale: newLocale });
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="fixed top-8 right-12 z-50 pointer-events-auto">
      <div className="relative flex items-center p-1 bg-white/20 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl shadow-emerald-950/10 h-10 w-32">
        {/* Animated Background Slider */}
        <motion.div
          layoutId="active-lang"
          className="absolute h-8 w-[60px] bg-white rounded-full shadow-md z-0"
          initial={false}
          animate={{
            x: locale === "en" ? 0 : 64,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />

        {/* Language Buttons */}
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLocaleChange(lang.code)}
            className={`relative z-10 flex-1 flex items-center justify-center font-outfit text-xs font-black tracking-widest transition-colors duration-300 ${
              locale === lang.code ? "text-emerald-900" : "text-emerald-800/40 hover:text-emerald-800"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
