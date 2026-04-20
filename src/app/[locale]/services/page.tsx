"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const courses = [
  { id: "gerb", title: "Лечение ГЭРБ", image: "/courses/gerb.png", description: "Свобода от изжоги и комфорт в желудке." },
  { id: "helicobacter", title: "Хеликобактер", image: "/courses/helicobacter.png", description: "Победа над бактерией и баланс микрофлоры." },
  { id: "weight", title: "Лишний вес", image: "/courses/weight.png", description: "Здоровое похудение через метаболизм." },
  { id: "panic", title: "Панические атаки", image: "/courses/panic.png", description: "Спокойствие ума и контроль над эмоциями." },
  { id: "recovery", title: "После операции", image: "/courses/recovery.png", description: "Мягкое восстановление сил и тканей." },
];

const quizQuestions = [
  { id: "gerb", text: "Беспокоит ли вас изжога или тяжесть после еды?" },
  { id: "helicobacter", text: "Часто ли вы испытываете вздутие или дискомфорт в желудке?" },
  { id: "weight", text: "Хотите ли вы прийти к своему идеальному весу без диет?" },
  { id: "panic", text: "Чувствуете ли вы тревогу или резкие приступы страха?" },
  { id: "recovery", text: "Недавно перенесли операцию и хотите восстановить силы?" },
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("6 мес");
  const router = useRouter();

  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/contact");
  };

  const handlePriceSelect = (e: React.MouseEvent, price: string) => {
    e.stopPropagation();
    setSelectedPrice(price);
  };

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
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex items-center gap-4 py-2 px-4 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-sm hover:bg-white/50 transition-colors">
          <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
            <Image src={course.image} alt={course.title} fill className="object-cover" />
          </div>
          <div className="flex-1 text-left">
            <h4 className="font-playfair text-sm lg:text-base font-bold text-zinc-900 leading-tight">{course.title.toUpperCase()}</h4>
            <p className="font-outfit text-[10px] lg:text-xs text-zinc-500 font-medium line-clamp-1">{course.description}</p>
          </div>
          <div className="flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-emerald-600 text-[9px] font-black uppercase tracking-widest">Цены →</span>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-between px-4 lg:px-6 rounded-2xl bg-emerald-900/90 backdrop-blur-2xl border border-emerald-500/30 text-white shadow-xl">
          <div className="flex gap-2 lg:gap-4 items-center">
            {[{ id: "1 мес", price: "50$" }, { id: "6 мес", price: "200$" }, { id: "12 мес", price: "400$" }].map((tier) => (
              <div 
                key={tier.id}
                onClick={(e) => handlePriceSelect(e, tier.id)}
                className={`text-center p-1.5 lg:p-2 rounded-xl transition-all border ${selectedPrice === tier.id ? "bg-emerald-500/20 border-emerald-400/50 scale-110 shadow-lg shadow-emerald-500/20" : "border-transparent opacity-60 hover:opacity-100 hover:bg-white/5"}`}
              >
                <p className={`text-[8px] lg:text-[9px] uppercase font-black tracking-tighter ${selectedPrice === tier.id ? "text-white" : "text-emerald-300"}`}>{tier.id}</p>
                <p className="text-[11px] lg:text-sm font-black font-playfair">{tier.price}</p>
              </div>
            ))}
          </div>
          <button onClick={handleBuy} className="px-3 py-2 lg:px-4 lg:py-2 bg-emerald-500 text-white text-[9px] lg:text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-900/20">Купить</button>
        </div>
      </motion.div>
    </div>
  );
}

function Questionnaire() {
  const [step, setStep] = useState<"start" | "quiz" | "result">("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const handleAnswer = (val: boolean) => {
    const qId = quizQuestions[currentIdx].id;
    const newAnswers = { ...answers, [qId]: val };
    setAnswers(newAnswers);

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep("result");
    }
  };

  const getRecommendation = () => {
    const matched = courses.find((c) => answers[c.id] === true);
    return matched || courses[2]; // Default to Weight if nothing matched
  };

  const result = getRecommendation();

  return (
    <div className="p-5 lg:p-8 bg-white/20 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl shadow-emerald-900/5 min-h-[400px] flex flex-col justify-center text-center">
      <AnimatePresence mode="wait">
        {step === "start" && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="mx-auto w-12 h-12 lg:w-16 lg:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
              <span className="text-xl">📝</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tight">ОПРОСНИК</h3>
              <p className="font-outfit text-sm lg:text-base text-zinc-500 font-medium leading-relaxed">Пройдите тест для персональной рекомендации.</p>
            </div>
            <button onClick={() => setStep("quiz")} className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10 active:scale-95 font-outfit tracking-widest uppercase text-xs">Начать тест</button>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div 
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="font-outfit text-[10px] font-black text-emerald-600/60 uppercase tracking-widest">Вопрос {currentIdx + 1} из {quizQuestions.length}</p>
              <h4 className="font-playfair text-lg lg:text-2xl font-bold text-zinc-900 leading-tight">
                {quizQuestions[currentIdx].text}
              </h4>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => handleAnswer(true)}
                className="flex-1 py-4 bg-white border border-emerald-100 text-zinc-900 font-bold rounded-2xl hover:bg-emerald-50 transition-all active:scale-95"
              >
                ДА
              </button>
              <button 
                onClick={() => handleAnswer(false)}
                className="flex-1 py-4 bg-white border border-emerald-100 text-zinc-900 font-bold rounded-2xl hover:bg-emerald-50 transition-all active:scale-95"
              >
                НЕТ
              </button>
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="font-outfit text-[10px] font-black text-emerald-600/60 uppercase tracking-widest">Рекомендация</p>
              <h3 className="font-playfair text-xl lg:text-2xl font-bold text-emerald-900 leading-tight uppercase">
                {result.title}
              </h3>
            </div>
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-500/20">
              <Image src={result.image} alt={result.title} fill className="object-cover" />
            </div>
            <p className="font-outfit text-sm text-emerald-800/70 font-medium px-4">
              На основе ваших ответов, эта программа наиболее эффективна для вас.
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={() => { setStep("start"); setCurrentIdx(0); }} className="text-[10px] font-bold text-emerald-600/60 hover:text-emerald-600 uppercase tracking-widest">Пройти заново</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex items-center justify-center p-4 lg:p-8 animate-fade lg:-translate-y-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-4 animate-slide-up items-start">
        <div className="lg:col-span-3">
          <div className="p-5 lg:p-8 bg-white/20 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl shadow-emerald-900/5">
            <h2 className="font-playfair text-xl lg:text-2xl font-black text-emerald-900 mb-4 tracking-tight uppercase">Программы Курсов</h2>
            <div className="space-y-2">
              {courses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 min-h-full">
          <Questionnaire />
        </div>
      </div>
    </div>
  );
}
