import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 lg:p-12 animate-fade">
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-3xl p-8 lg:p-16 rounded-[4rem] border border-white/50 shadow-2xl shadow-emerald-900/5 animate-slide-up flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left">
        
        {/* Left Column: Avatar & Professional Identity */}
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:w-1/3">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/80 shadow-xl shadow-emerald-900/10">
            <Image
              src="/avatar.png"
              alt="Dr. Ai-Bolit"
              fill
              className="object-cover object-center scale-110"
              priority
            />
          </div>
          
          <div className="space-y-2">
            <h2 className="font-playfair text-3xl lg:text-4xl font-black tracking-tight text-emerald-900">
              DR. AI-BOLIT
            </h2>
            <div className="h-1 w-12 bg-emerald-500 rounded-full mx-auto lg:mx-0" />
            <p className="font-outfit text-sm font-bold tracking-widest text-emerald-600/80 uppercase">
              Семейный врач • Нутрициолог<br />
              Хаджам • Интегративная медицина
            </p>
          </div>
        </div>

        {/* Right Column: Experience & Mission */}
        <div className="flex-1 space-y-8 py-4">
          <div className="space-y-6">
            <h3 className="font-playfair text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Ваш проводник в мир<br />
              <span className="italic text-emerald-700">истинного здоровья</span>
            </h3>

            <div className="space-y-4 font-outfit text-lg lg:text-xl text-zinc-600 leading-relaxed font-medium">
              <p>
                <strong className="text-zinc-900">Высшее медицинское образование</strong> и более 
                <span className="text-emerald-700 font-bold"> 16 лет </span> 
                практического опыта позволяют мне смотреть на здоровье комплексно. 
              </p>
              <p>
                Я верю, что каждый из нас достоин быть по-настоящему бодрым и полным сил. Мой подход объединяет древние традиции и современные научные данные.
              </p>
              <p className="text-emerald-800/70 italic font-serif">
                «Здесь всё о ЗОЖ и ПП на простом и понятном языке.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
