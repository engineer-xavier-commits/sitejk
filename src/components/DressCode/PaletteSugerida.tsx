export default function PaletteSugerida() {
  return (
    <div className="flex h-[450px] w-full flex-col items-center justify-center bg-[#F0EFE7] p-8 text-center">
      <p className="uppercase tracking-[0.3em] text-[#2E3A2F]">
        Paleta sugerida
      </p>

      <h2
        className="mt-4 text-2xl text-[#2E3A2F] md:text-3xl"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Verde, preto e cinza
      </h2>

      <p className="mt-2 text-sm text-[#6B7A6D]">
        Ideal para os convidados
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <div className="h-14 w-14 rounded-full bg-[#3E4F3A] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#6B8062] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#111111] shadow-inner" />
        <div className="h-14 w-14 rounded-full bg-[#8C9089] shadow-inner" />
      </div>
    </div>
  );
}