import React from "react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-end p-12 lg:p-24 animate-fade">
      <div className="max-w-4xl animate-slide-up">
        <h1 className="font-playfair text-7xl lg:text-[11rem] font-black tracking-[-0.05em] leading-[0.8] mb-12 bg-gradient-to-br from-emerald-400 via-emerald-700 to-emerald-950 bg-clip-text text-transparent">
          Будь<br />Здоров
        </h1>
        <p className="text-xl lg:text-2xl font-medium max-w-lg leading-relaxed bg-gradient-to-br from-emerald-600 to-emerald-950 bg-clip-text text-transparent opacity-90 font-outfit">
          Твой путь к гармонии через чистое питание, 
          осознанность и движение. Начни менять свою жизнь сегодня.
        </p>
      </div>
    </div>
  );
}
