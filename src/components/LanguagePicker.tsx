"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { usePathname, useRouter } from "../navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "RU", locale: "ru" },
  { code: "EN", locale: "en" },
];

export default function LanguagePicker() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLangChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsExpanded(false);
  };

  return (
    <div className="fixed top-8 right-12 z-[100]">
      <motion.div 
        layout
        className="flex items-center p-1 bg-white/40 backdrop-blur-2xl border border-emerald-100/50 rounded-full shadow-xl shadow-emerald-900/5 transition-all outline-none overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-1"
            >
              {languages.map((lang) => {
                const isActive = currentLocale === lang.locale;
                return (
                  <button
                    key={lang.locale}
                    type="button"
                    onClick={() => handleLangChange(lang.locale)}
                    className={`relative px-6 py-2.5 text-sm font-medium tracking-tight transition-colors duration-300 rounded-full font-outfit uppercase cursor-pointer outline-none select-none ${
                      isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-min"
                        className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 38
                        }}
                      />
                    )}
                    <span className="relative z-10">{lang.code}</span>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.button
              key="compact"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              type="button"
              onClick={() => setIsExpanded(true)}
              className="relative px-6 py-2.5 text-sm font-medium tracking-tight text-zinc-900 rounded-full font-outfit uppercase cursor-pointer outline-none select-none hover:bg-white/20 transition-colors"
            >
              {currentLocale.toUpperCase()}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
