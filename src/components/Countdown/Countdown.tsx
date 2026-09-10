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
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="uppercase tracking-[0.35em] text-[#6E7D98]">
          CONTAGEM REGRESSIVA
        </p>

        <h2
          className="mt-4 text-5xl text-[#6E7D98]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Estamos contando os dias
        </h2>

        <div className="mt-16 grid grid-cols-4 gap-6">
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
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="text-5xl font-light text-[#6E7D98]">
        {String(number).padStart(2, "0")}
      </h3>

      <p className="mt-3 uppercase tracking-[0.2em] text-gray-500">
        {label}
      </p>
    </div>
  );
}