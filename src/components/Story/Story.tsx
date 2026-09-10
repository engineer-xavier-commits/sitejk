"use client";

const story = [
  {
    year: "2022",
    title: "O Primeiro Encontro",
    description:
      "Foi aqui que tudo começou, no Hopi Hari. Um encontro que mudou nossas vidas para sempre.",
  },
  {
    year: "2024",
    title: "O Início da Nossa História",
    description:
      "Descobrimos que juntos éramos muito melhores do que separados.",
  },
  {
    year: "2025",
    title: "O Pedido",
    description:
      "Entre lágrimas, sorrisos e muita emoção, dissemos sim para uma nova etapa.",
  },
  {
    year: "2027",
    title: "O Dia do Sim",
    description:
      "Agora chegou o momento de celebrar esse amor ao lado das pessoas que mais amamos.",
  },
];

export default function Story() {
  return (
    <section id="historia" className="bg-white py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-center uppercase tracking-[0.35em] text-[#6E7D98]">
          NOSSA HISTÓRIA
        </p>

        <h2
          className="mt-4 text-center text-5xl text-[#6E7D98]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Nossa jornada até o altar
        </h2>

        <div className="mt-16 overflow-x-auto scroll-smooth px-6">
          <div className="flex gap-8 pb-6">
            {story.map((item) => (
              <div
                key={item.year}
                className="min-w-[360px] max-w-[360px] flex-shrink-0 rounded-3xl border border-gray-200 bg-[#FAF8F5] p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-[#6E7D98]">
                  {item.year}
                </span>

                <h3
                  className="mt-4 text-3xl text-[#6E7D98]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}