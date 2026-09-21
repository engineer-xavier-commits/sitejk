"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PaletteEvitar from "./PaletteEvitar";
import PaletteSugerida from "./PaletteSugerida";

export default function DressCodeCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 10000,
      }),
    ]
  );

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-3xl shadow-xl"
        ref={emblaRef}
      >
        <div className="flex">
          {/* Slide 1 */}
          <div className="min-w-0 flex-[0_0_100%] bg-white">
            <img
              src="/images/dresscode.png"
              alt="Dress Code"
              className="h-[320px] w-full object-contain p-4 sm:h-[450px]"
            />
          </div>

          {/* Slide 2 */}
          <div className="min-w-0 flex-[0_0_100%]">
            <PaletteSugerida />
          </div>

          {/* Slide 3 */}
          <div className="min-w-0 flex-[0_0_100%]">
            <PaletteEvitar />
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => emblaApi?.scrollTo(0)}
          className="h-3 w-3 rounded-full bg-[#6E7D98] transition-all duration-300 hover:scale-110"
        />

        <button
          onClick={() => emblaApi?.scrollTo(1)}
          className="h-3 w-3 rounded-full border border-[#6E7D98] transition-all duration-300 hover:scale-110"
        />

        <button
          onClick={() => emblaApi?.scrollTo(2)}
          className="h-3 w-3 rounded-full border border-[#6E7D98] transition-all duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}