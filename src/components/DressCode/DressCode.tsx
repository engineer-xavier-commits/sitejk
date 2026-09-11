import DressCodeCarousel from "./DressCodeCarousel";

export default function DressCode() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.35em] text-[#6E7D98]">
            DRESS CODE 
          </p>

          <h2
            className="mt-4 text-5xl text-[#6E7D98]"
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