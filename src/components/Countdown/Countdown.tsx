"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2027-06-27T16:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[#6E7D98] sm:text-base sm:tracking-[0.35em]">
          CONTAGEM REGRESSIVA
        </p>

        <h2
          className="mt-4 text-3xl text-[#6E7D98] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Estamos contando os dias
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-6">
          <Card number={timeLeft.days} label="Dias" />
          <Card number={timeLeft.hours} label="Horas" />
          <Card number={timeLeft.minutes} label="Minutos" />
          <Card number={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  number: number;
  label: string;
};

function Card({ number, label }: CardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
      <h3 className="text-3xl font-light text-[#6E7D98] sm:text-5xl">
        {String(number).padStart(2, "0")}
      </h3>

      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-gray-500 sm:mt-3 sm:text-xs sm:tracking-[0.2em]">
        {label}
      </p>
    </div>
  );
}