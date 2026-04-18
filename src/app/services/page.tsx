"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  { id: "gerb", title: "Лечение ГЭРБ", image: "/courses/gerb.png", description: "Свобода от изжоги и комфорт в желудке." },
  { id: "helicobacter", title: "Хеликобактер", image: "/courses/helicobacter.png", description: "Победа над бактерией и баланс микрофлоры." },
  { id: "weight", title: "Лишний вес", image: "/courses/weight.png", description: "Здоровое похудение через метаболизм." },
  { id: "panic", title: "Панические атаки", image: "/courses/panic.png", description: "Спокойствие ума и контроль над эмоциями." },
  { id: "recovery", title: "После операции", image: "/courses/recovery.png", description: "Мягкое восстановление сил и тканей." },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[76px] lg:h-[84px] [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full text-center transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex items-center gap-4 py-2 px-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/50 transition-colors">
          <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-playfair text-sm lg:text-base font-bold text-zinc-900 leading-tight">
              {course.title.toUpperCase()}
            </h4>
            <p className="font-outfit text-[10px] lg:text-xs text-zinc-500 font-medium line-clamp-1">
              {course.description}
            </p>
          </div>
          <div className="flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-emerald-600 text-[9px] font-black uppercase tracking-widest">Цены →</span>
          </div>
        </div>

        {/* Back Side (Pricing) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-between px-6 rounded-2xl bg-emerald-900/90 backdrop-blur-2xl border border-emerald-500/30 text-white shadow-xl">
          <div className="flex gap-4 lg:gap-8 items-center">
            <div className="text-center">
              <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-tighter text-emerald-300 opacity-60">1 мес</p>
              <p className="text-xs lg:text-sm font-black font-playfair">50$</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-tighter text-emerald-300 opacity-60">6 мес</p>
              <p className="text-xs lg:text-sm font-black font-playfair text-emerald-300">200$</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] lg:text-[10px] uppercase font-black tracking-tighter text-emerald-300 opacity-60">12 мес</p>
              <p className="text-xs lg:text-sm font-black font-playfair">400$</p>
            </div>
          </div>
          
          <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white text-emerald-900 text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-50 transition-all active:scale-95">
            Купить
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 lg:p-8 animate-fade lg:-translate-y-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-4 animate-slide-up items-start">
        
        {/* Left Section: Detailed Programs Catalog (3 columns) */}
        <div className="lg:col-span-3">
          <div className="p-5 lg:p-8 bg-white/20 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl shadow-emerald-900/5">
            <h2 className="font-playfair text-xl lg:text-2xl font-black text-emerald-900 mb-4 tracking-tight uppercase">
              Программы Курсов
            </h2>
            
            <div className="space-y-2">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Interactive Questionnaire (2 columns) */}
        <div className="lg:col-span-2">
          <div className="p-6 lg:p-10 bg-emerald-900/5 backdrop-blur-3xl rounded-[2.5rem] border border-emerald-100/50 flex flex-col justify-center text-center space-y-4 lg:space-y-6">
            <div className="mx-auto w-12 h-12 lg:w-16 lg:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
              <span className="text-xl">📝</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-playfair text-xl lg:text-3xl font-bold text-emerald-900 uppercase tracking-tight">
                ОПРОСНИК
              </h3>
              <p className="font-outfit text-sm lg:text-base text-emerald-800/70 font-medium leading-relaxed">
                Не знаете с чего начать?<br />
                Пройдите короткий тест для первичной диагностики.
              </p>
            </div>

            <button className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10 active:scale-95 font-outfit tracking-widest uppercase text-xs">
              Начать тест
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
