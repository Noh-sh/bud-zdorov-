import React from "react";

export default function ContactPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 animate-fade">
      <div className="max-w-md w-full bg-white/50 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl shadow-emerald-950/5 border border-emerald-100/50 animate-slide-up">
        <h2 className="font-playfair text-4xl font-bold tracking-tight text-center text-foreground mb-8 text-nowrap">
          КОНТАКТЫ
        </h2>
        
        <form className="space-y-4">
          <input
            type="text"
            className="w-full rounded-2xl border-none bg-emerald-50/50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            placeholder="ВАШЕ ИМЯ"
          />
          <input
            type="email"
            className="w-full rounded-2xl border-none bg-emerald-50/50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            placeholder="EMAIL"
          />
          <textarea
            rows={3}
            className="w-full rounded-2xl border-none bg-emerald-50/50 px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
            placeholder="ВАШЕ СООБЩЕНИЕ"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-600 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-500 transition-all active:scale-95 uppercase tracking-widest"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  );
}
