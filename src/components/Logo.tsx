"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Logo() {
  return (
    <div className="fixed top-8 left-12 z-50">
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{
          duration: 10, // Slightly faster for 3D effect to be noticeable
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-emerald-500/20 bg-white/30 backdrop-blur-xl shadow-lg shadow-emerald-900/5 select-none"
      >
        <span className="font-playfair font-black text-xl text-emerald-600 tracking-tight">
          BZ
        </span>
      </motion.div>
    </div>
  );
}
