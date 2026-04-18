import Image from "next/image";
import React from "react";

const courses = [
  { id: "gerb", title: "Лечение ГЭРБ", image: "/courses/gerb.png", description: "Свобода от изжоги и комфорт в желудке." },
  { id: "helicobacter", title: "Хеликобактер", image: "/courses/helicobacter.png", description: "Победа над бактерией и баланс микрофлоры." },
  { id: "weight", title: "Лишний вес", image: "/courses/weight.png", description: "Здоровое похудение через метаболизм." },
  { id: "panic", title: "Панические атаки", image: "/courses/panic.png", description: "Спокойствие ума и контроль над эмоциями." },
  { id: "recovery", title: "После операции", image: "/courses/recovery.png", description: "Мягкое восстановление сил и тканей." },
];

export default function ServicesPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-8 animate-fade lg:-translate-y-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-6 animate-slide-up items-start">
        
        {/* Left Section: Detailed Programs Catalog (3 columns) */}
        <div className="lg:col-span-3">
          <div className="p-6 lg:p-8 bg-white/30 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-2xl shadow-emerald-900/5">
            <h2 className="font-playfair text-xl lg:text-2xl font-black text-emerald-900 mb-4 tracking-tight uppercase">
              Программы Курсов
            </h2>
            
            <div className="space-y-2">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  className="group flex items-center gap-4 py-2 px-3 rounded-2xl hover:bg-white/40 transition-all border border-transparent hover:border-emerald-100/50 cursor-pointer"
                >
                  <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-md flex-shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair text-sm lg:text-base font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                      {course.title.toUpperCase()}
                    </h4>
                    <p className="font-outfit text-[11px] lg:text-xs text-zinc-500 font-medium line-clamp-1">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Interactive Questionnaire (2 columns) */}
        <div className="lg:col-span-2">
          <div className="p-6 lg:p-8 bg-emerald-900/5 backdrop-blur-3xl rounded-[3rem] border border-emerald-100/50 flex flex-col justify-center text-center space-y-4">
            <div className="mx-auto w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
              <span className="text-xl">📝</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-playfair text-xl lg:text-2xl font-bold text-emerald-900 uppercase tracking-tight">
                ОПРОСНИК
              </h3>
              <p className="font-outfit text-sm lg:text-base text-emerald-800/70 font-medium leading-relaxed">
                Не знаете с чего начать?<br />
                Пройдите короткий тест для первичной диагностики.
              </p>
            </div>

            <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10 active:scale-95 font-outfit tracking-widest uppercase text-xs">
              Начать тест
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
