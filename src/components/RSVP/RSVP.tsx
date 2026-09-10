"use client";

import { useState } from "react";
import Button from "../Button/Button";
import RSVPModal from "./RSVPModal";

export default function RSVP() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: "url('/images/jek.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada escura sobre a imagem */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-white/35 px-12 py-20 text-center shadow-2xl backdrop-blur-sm">
          <p className="uppercase tracking-[0.35em] text-[#6E7D98]">
            J| K
          </p>

          <h2
            className="mt-4 text-5xl text-[#6E7D98]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Confirme sua presença
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Sua presença tornará este dia ainda mais especial.
            Esperamos celebrar esse momento com você.
          </p>

          <div className="mt-12">
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