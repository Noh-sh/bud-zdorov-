"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "ГЛАВНОЕ", href: "/" },
  { name: "ОБО МНЕ", href: "/about" },
  { name: "СЕРВИС", href: "/services" },
  { name: "КОНТАКТЫ", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <div className="flex items-center gap-1 p-1 bg-white/40 backdrop-blur-2xl border border-emerald-100/50 rounded-full shadow-xl shadow-emerald-900/5 transition-all pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-6 py-2.5 text-sm font-medium tracking-tight transition-colors duration-300 rounded-full font-outfit ${
                isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-white/80 rounded-full shadow-sm"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 38
                    }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 uppercase">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
