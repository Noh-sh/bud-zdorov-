import React from "react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-end p-12 lg:p-24 animate-fade">
      <div className="max-w-4xl animate-slide-up">
        <h1 className="font-playfair text-7xl lg:text-[11rem] font-black tracking-[-0.05em] text-foreground leading-[0.8] mb-12">
          Будь<br />Здоров
        </h1>
        <p className="text-xl lg:text-2xl font-medium text-foreground/60 max-w-lg leading-relaxed">
          Твой путь к гармонии через чистое питание, 
          осознанность и движение. Начни менять свою жизнь сегодня.
        </p>
        
        <div className="mt-12 flex gap-4">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/10 active:scale-95">
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </div>
    </div>
  );
}
