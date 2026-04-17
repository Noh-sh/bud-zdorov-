import React from "react";

export default function AboutPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 animate-fade">
      <div className="max-w-xl w-full bg-white/30 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/50 shadow-2xl shadow-emerald-900/5 animate-slide-up">
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 text-center">
          ОБО МНЕ
        </h2>
        <p className="text-xl text-foreground/70 leading-relaxed font-serif italic text-center">
          Я верю, что здоровье — это не просто отсутствие болезней, а гармония души и тела. Моя миссия — помочь вам найти этот баланс через осознанный подход к каждому дню.
        </p>
      </div>
    </div>
  );
}
