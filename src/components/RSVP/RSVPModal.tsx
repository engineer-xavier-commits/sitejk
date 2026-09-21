"use client";

import { useState } from "react";

type RSVPModalProps = {
  open: boolean;
  onClose: () => void;
};

const spreadsheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBAPP_URL;

export default function RSVPModal({
  open,
  onClose,
}: RSVPModalProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState<"form" | "confirmed">("form");
  const [confirmedName, setConfirmedName] = useState("");

  if (!open) return null;

  function closeModal() {
    setName("");
    setError("");
    setScreen("form");
    setConfirmedName("");
    onClose();
  }

  async function confirmPresence() {
    const normalizedName = name.trim();

    if (!normalizedName) {
      setError("Digite seu nome antes de confirmar.");
      return;
    }

    if (!spreadsheetUrl) {
      setError("A URL do Google Sheets ainda não foi configurada no deploy.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(spreadsheetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: normalizedName,
          status: "confirmed",
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar a confirmação.");
      }

      setConfirmedName(normalizedName);
      setName("");
      setScreen("confirmed");
    } catch (err) {
      console.error(err);
      setError("Não foi possível registrar sua presença. Tente novamente.");
    } finally {
      setLoading(false);
    }
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

        {screen === "form" && (
          <>
            <p className="mt-6 text-gray-600">
              Digite seu nome para confirmar a presença. Qualquer nome pode ser
              incluído e registrado na planilha.
            </p>

            <div className="mt-10 space-y-6">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    confirmPresence();
                  }
                }}
                placeholder="Nome completo"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#6E7D98]"
              />

              {error && <p className="text-sm text-red-500">{error}</p>}

              <button
                onClick={confirmPresence}
                disabled={loading}
                className="w-full rounded-full bg-[#6E7D98] py-4 uppercase tracking-[0.2em] text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Confirmando..." : "Confirmar Presença"}
              </button>
            </div>
          </>
        )}

        {screen === "confirmed" && (
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
              {confirmedName}
            </h3>

            <p className="mt-6 text-gray-600">
              Muito obrigado! Sua presença foi registrada e enviada para a planilha.
            </p>

            <button
              onClick={closeModal}
              className="mt-10 w-full rounded-full bg-[#6E7D98] py-4 uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}