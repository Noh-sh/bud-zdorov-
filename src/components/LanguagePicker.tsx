"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const languages = [
  { code: "RU", name: "Русский" },
  { code: "EN", name: "English" },
];

export default function LanguagePicker() {
  const [selectedLang, setSelectedLang] = useState("RU");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    /* Higher z-index to stay above everything else */
    <div className="fixed top-8 right-12 z-[100]">
      <motion.div 
        layout
        className="flex items-center p-1 bg-white/40 backdrop-blur-2xl border border-emerald-100/50 rounded-full shadow-xl shadow-emerald-900/5 transition-all outline-none overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isExpanded ? (
            /* Expanded State: RU | EN */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-1"
            >
              {languages.map((lang) => {
                const isSelected = selectedLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLang(lang.code);
                      setIsExpanded(false);
                    }}
                    className={`relative px-6 py-2.5 text-sm font-medium tracking-tight transition-colors duration-300 rounded-full font-outfit uppercase cursor-pointer outline-none select-none ${
                      isSelected ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {isSelected && (
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
            /* Compact State: Only Current Language */
            <motion.button
              key="compact"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              type="button"
              onClick={() => setIsExpanded(true)}
              className="relative px-6 py-2.5 text-sm font-medium tracking-tight text-zinc-900 rounded-full font-outfit uppercase cursor-pointer outline-none select-none hover:bg-white/20 transition-colors"
            >
              {selectedLang}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
