"use client";

import { useState } from "react";
import Button from "../Button/Button";
import RSVPModal from "./RSVPModal";

export default function RSVP() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        backgroundImage: "url('/images/jek.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white/35 px-5 py-10 text-center shadow-2xl backdrop-blur-sm sm:px-12 sm:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6E7D98] sm:text-base sm:tracking-[0.35em]">
            J| K
          </p>

          <h2
            className="mt-4 text-3xl text-[#6E7D98] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Confirme sua presença
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
            Sua presença tornará este dia ainda mais especial.
            Esperamos celebrar esse momento com você.
          </p>

          <div className="mt-8 sm:mt-12">
            <Button onClick={() => setOpen(true)}>
              Confirmar Presença
            </Button>
          </div>
        </div>
      </div>

      <RSVPModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}