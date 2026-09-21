export default function PaletteEvitar() {
  return (
    <div className="flex h-[320px] w-full flex-col items-center justify-center bg-[#F0F3F7] p-6 text-center sm:h-[450px] sm:p-8">
      <p className="uppercase tracking-[0.3em] text-[#6E7D98]">
        Evitar esta paleta
      </p>

      <h2
        className="mt-4 text-2xl text-[#6E7D98] md:text-3xl"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Tons de azul e branco
      </h2>

      <p className="mt-2 text-sm text-[#8B93A3]">
        Reservados para os padrinhos
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#2F3E5C] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#5C7099] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#A9BBD6] shadow-inner" />
        <div className="h-14 w-14 rounded-full border border-[#D8DEE8] bg-[#F4F6F9] shadow-inner" />
      </div>
    </div>
  );
}