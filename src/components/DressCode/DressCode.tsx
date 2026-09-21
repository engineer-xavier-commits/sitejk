import DressCodeCarousel from "./DressCodeCarousel";

export default function DressCode() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6E7D98] sm:text-base sm:tracking-[0.35em]">
            DRESS CODE
          </p>

          <h2
            className="mt-4 text-3xl text-[#6E7D98] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Elegância para um dia inesquecível
          </h2>
        </div>

        <DressCodeCarousel />
      </div>
    </section>
  );
}