import Button from "../Button/Button";

type HeroProps = {
  groom: string;
  bride: string;
};

export default function Hero({
  groom,
  bride,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative flex h-screen flex-col items-center justify-center bg-cover bg-bottom px-4 text-center sm:px-0"
      style={{
        backgroundImage: "url('/images/image.png')",
        backgroundPosition: "center -100%",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 w-full max-w-xl px-2">
        <div className="mb-8 sm:mb-16">
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#ddd9ce] sm:mb-7 sm:text-sm sm:tracking-[0.35em]">
            VAMOS NOS CASAR!
          </p>

          <h1
            className="text-4xl leading-none text-[#ddd9ce] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            {groom} e {bride}
          </h1>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 sm:mt-20 lg:mt-32">
          <a href="#rsvp" className="w-full max-w-xs sm:max-w-none">
            <Button>Confirmar Presença</Button>
          </a>

          <span className="block animate-bounce text-3xl text-[#ddd9ce] sm:text-4xl">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}