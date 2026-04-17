"use client";

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
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <div className="flex items-center gap-1 p-1 bg-white/40 backdrop-blur-2xl border border-emerald-100/50 rounded-full shadow-xl shadow-emerald-900/5 transition-all">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-6 py-2.5 text-xs font-bold tracking-widest transition-all rounded-full ${
                isActive 
                  ? "bg-zinc-900 text-white shadow-md shadow-black/10" 
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
