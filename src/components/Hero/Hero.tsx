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
      className="relative flex h-screen flex-col items-center justify-center bg-cover bg-bottom px-6 text-center sm:px-0"
      style={{
        backgroundImage: "url('/images/image.png')",
        backgroundPosition: "center -100%",
        backgroundSize: "cover",
      }}
    >
      {<div className="absolute inset-0 bg-black/35" />}

      <div className="relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="mb-7 uppercase tracking-[0.35em] text-[#ddd9ce] text-sm sm:text-base">
            VAMOS NOS CASAR!
          </p>

          <h1
            className="text-5xl text-[#ddd9ce] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            {groom} e {bride}
          </h1>
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 sm:mt-24 lg:mt-32">
          <a href="#rsvp">
            <Button>Confirmar Presença</Button>
          </a>

          <span className="block animate-bounce text-4xl text-[#ddd9ce]">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}