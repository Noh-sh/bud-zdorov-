import React from "react";

export default function ServicesPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 animate-fade">
      <div className="max-w-3xl w-full animate-slide-up">
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold tracking-tight text-center text-foreground mb-12">
          СЕРВИС
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white/40 rounded-[2rem] border border-emerald-100/50">
            <h3 className="text-xl font-bold mb-4">КОНСУЛЬТАЦИИ</h3>
            <p className="text-foreground/70 text-sm font-medium">Индивидуальный план питания и разбор образа жизни.</p>
          </div>
          <div className="p-8 bg-white/40 rounded-[2rem] border border-emerald-100/50">
            <h3 className="text-xl font-bold mb-4">ПРОГРАММЫ</h3>
            <p className="text-foreground/70 text-sm font-medium">Комплексные курсы по восстановлению энергии и здоровья.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
