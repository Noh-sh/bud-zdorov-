"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const languages = [
  { code: "ENG", name: "English" },
  { code: "RUS", name: "Русский" },
  { code: "FR", name: "Français" },
  { code: "ARA", name: "العربية" },
];

export default function LanguagePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("RUS");

  return (
    <div className="fixed top-8 right-12 z-50 flex flex-col items-end">
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center min-w-[64px] h-14 px-4 rounded-full border-2 border-emerald-500/20 bg-white/30 backdrop-blur-xl shadow-lg shadow-emerald-900/5 hover:bg-white/40 transition-all active:scale-95 cursor-pointer"
      >
        <span className="font-outfit font-bold text-sm tracking-widest text-emerald-700">
          {currentLang}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-4 p-2 bg-white/40 backdrop-blur-2xl border border-emerald-500/20 rounded-[2rem] shadow-2xl shadow-emerald-950/20 flex flex-col gap-1 overflow-hidden min-w-[120px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-6 py-3 rounded-full text-xs font-bold tracking-widest transition-all ${
                  currentLang === lang.code
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/10"
                    : "text-zinc-600 hover:bg-emerald-100/50 hover:text-emerald-700"
                }`}
              >
                <span>{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
