"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-12 animate-fade lg:-translate-y-4">
      <div className="max-w-2xl w-full animate-slide-up">
        
        {/* Main Content Card: Form + Socials */}
        <div className="p-8 lg:p-12 bg-white/30 backdrop-blur-3xl rounded-[3.5rem] border border-white/50 shadow-2xl shadow-emerald-900/5 flex flex-col items-center">
          
          <div className="w-full space-y-8">
            <div className="text-center space-y-2">
              <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-zinc-900 uppercase tracking-tight">
                {t('title')}
              </h3>
              <p className="font-outfit text-sm lg:text-base text-zinc-500 font-medium">
                {t('desc')}
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="ml-4 font-outfit text-[10px] font-black text-emerald-700 uppercase tracking-widest">{t('nameLabel')}</label>
                <input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-emerald-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-outfit text-sm font-bold placeholder:text-zinc-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="ml-4 font-outfit text-[10px] font-black text-emerald-700 uppercase tracking-widest">{t('phoneLabel')}</label>
                <input
                  type="tel"
                  placeholder={t('phonePlaceholder')}
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-emerald-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-outfit text-sm font-bold placeholder:text-zinc-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="ml-4 font-outfit text-[10px] font-black text-emerald-700 uppercase tracking-widest">{t('serviceLabel')}</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-emerald-100 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-outfit text-sm font-bold text-zinc-600 appearance-none cursor-pointer">
                  <option value="general">{t('services_list.general')}</option>
                  <option value="gerb">{t('services_list.gerb')}</option>
                  <option value="weight">{t('services_list.weight')}</option>
                  <option value="panic">{t('services_list.panic')}</option>
                  <option value="helicobacter">{t('services_list.helicobacter')}</option>
                </select>
              </div>

              <button className="w-full mt-2 py-4 lg:py-5 bg-emerald-600 text-white font-black text-xs lg:text-sm uppercase tracking-widest rounded-3xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/10 active:scale-95 font-outfit">
                {t('submit')}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
