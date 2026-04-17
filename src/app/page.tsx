import React from "react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-end p-12 lg:p-24 animate-fade">
      <div className="max-w-2xl animate-slide-up">
        <h1 className="font-playfair text-6xl lg:text-9xl font-bold tracking-tighter text-foreground leading-none">
          Будь Здоров
        </h1>
        <p className="mt-8 text-lg lg:text-xl font-medium text-foreground/70 max-w-md">
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
