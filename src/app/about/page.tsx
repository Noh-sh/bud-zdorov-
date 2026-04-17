import React from "react";

export default function AboutPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 animate-fade">
      <div className="max-w-xl text-center space-y-8 animate-slide-up">
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          ОБО МНЕ
        </h2>
        <p className="text-lg text-foreground/70 leading-relaxed font-medium">
          Я помогаю людям находить баланс между современным ритмом жизни и истинными потребностями организма. Мой подход основан на науке и любви к природе.
        </p>
      </div>
    </div>
  );
}
