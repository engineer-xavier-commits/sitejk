export default function PaletteSugerida() {
  return (
    <div className="flex h-[320px] w-full flex-col items-center justify-center bg-[#F0EFE7] p-6 text-center sm:h-[450px] sm:p-8">
      <p className="uppercase tracking-[0.3em] text-[#2E3A2F]">
        Paleta sugerida
      </p>

      <h2
        className="mt-4 text-2xl text-[#2E3A2F] md:text-3xl"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Tons pastéis
      </h2>

      <p className="mt-2 text-sm text-[#6B7A6D]">
        Ideal para os convidados
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#C1E1C1] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#B8D4B8] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#E8D5C4] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#E6E6FA] shadow-inner" />
      </div>
    </div>
  );
}