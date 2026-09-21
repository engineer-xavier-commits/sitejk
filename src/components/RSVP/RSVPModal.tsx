"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type RSVPModalProps = {
  open: boolean;
  onClose: () => void;
};

type Guest = {
  id: string;
  name: string;
  group_id: string;
  status: "pending" | "confirmed" | "declined";
};

export default function RSVPModal({
  open,
  onClose,
}: RSVPModalProps) {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<Guest | null>(null);
  const [matches, setMatches] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState<"search" | "selected" | "confirmed">("search");

  if (!open) return null;

  async function searchGuest() {
    const normalizedName = name.trim();

    if (!normalizedName) {
      setError("Digite seu nome.");
      return;
    }

    if (!supabase) {
      setError("As variáveis do Supabase ainda não foram configuradas no deploy.");
      return;
    }

    setLoading(true);
    setError("");
    setGuest(null);
    setMatches([]);
    setScreen("search");

    const { data, error } = await supabase
      .from("guests")
      .select("id, name, group_id, status")
      .ilike("name", normalizedName)
      .limit(10);

    if (error) {
      console.error(error);
      setError("Não foi possível consultar sua reserva.");
      setLoading(false);
      return;
    }

    if (!data || data.length === 0) {
      setError(
        "Não encontramos seu nome na lista de convidados. Verifique o nome e tente novamente."
      );
      setLoading(false);
      return;
    }

    if (data.length > 1) {
      setMatches(data as Guest[]);
      setError(
        "Encontrei mais de uma reserva com esse nome. Selecione a correta abaixo."
      );
      setLoading(false);
      return;
    }

    setGuest(data[0] as Guest);
    setScreen("selected");
    setLoading(false);
  }

  function closeModal() {
    setName("");
    setGuest(null);
    setMatches([]);
    setError("");
    setScreen("search");
    onClose();
  }

  async function confirmPresence() {
    if (!guest) return;

    if (!supabase) {
      setError("As variáveis do Supabase ainda não foram configuradas no deploy.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("guests")
      .update({ status: "confirmed" })
      .eq("id", guest.id);

    setLoading(false);

    if (error) {
      console.error(error);
      setError("Não foi possível confirmar sua presença. Tente novamente.");
      return;
    }

    setScreen("confirmed");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">
        <div className="flex items-center justify-end">
          <button
            onClick={closeModal}
            className="text-3xl text-gray-400 hover:text-gray-700"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        {screen === "search" && (
          <>
            <p className="mt-6 text-gray-600">
              Digite seu nome como está no convite para encontrarmos sua
              reserva.
            </p>

            <div className="mt-10 space-y-6">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    searchGuest();
                  }
                }}
                placeholder="Nome completo"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6E7D98]"
              />

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              {matches.length > 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Selecione a reserva correta:
                  </p>

                  {matches.map((match) => (
                    <button
                      key={match.id}
                      type="button"
                      onClick={() => {
                        setGuest(match);
                        setMatches([]);
                        setError("");
                        setScreen("selected");
                      }}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-left transition hover:border-[#6E7D98] hover:bg-white"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium text-gray-700">
                          {match.name}
                        </span>
                        <span className="text-xs uppercase tracking-[0.12em] text-gray-400">
                          {match.status}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Grupo: {match.group_id.slice(0, 8)}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={searchGuest}
                disabled={loading}
                className="w-full rounded-full bg-[#6E7D98] py-4 uppercase tracking-[0.2em] text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Consultando..." : "Continuar"}
              </button>
            </div>
          </>
        )}

        {screen === "confirmed" && guest && (
          <div className="mt-10 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F4EA] text-4xl text-[#2E7D32]">
              ✓
            </div>

            <p className="uppercase tracking-[0.2em] text-sm text-gray-500">
              Presença confirmada
            </p>

            <h3
              className="mt-4 text-4xl text-[#6E7D98]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {guest.name}
            </h3>

            <p className="mt-6 text-gray-600">
              Muito obrigado! Sua presença foi confirmada para o nosso dia.
            </p>

            <button
              onClick={closeModal}
              className="mt-10 w-full rounded-full bg-[#6E7D98] py-4 uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Fechar
            </button>
          </div>
        )}

        {screen === "selected" && guest && (
          <>
            <div className="mt-10 text-center">
              <p className="uppercase tracking-[0.2em] text-sm text-gray-500">
                Convidado encontrado
              </p>

              <h3
                className="mt-4 text-4xl text-[#6E7D98]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {guest.name}
              </h3>

              <p className="mt-6 text-gray-600">
                Encontramos sua reserva para o nosso casamento.
              </p>
            </div>

            <button
              onClick={confirmPresence}
              disabled={loading}
              className="mt-10 w-full rounded-full bg-[#6E7D98] py-4 uppercase tracking-[0.2em] text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Confirmando..." : "Confirmar Presença"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}