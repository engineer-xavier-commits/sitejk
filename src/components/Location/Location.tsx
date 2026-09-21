import Button from "../Button/Button";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="casamento" className="bg-[#F8F6F2] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6E7D98] sm:text-base sm:tracking-[0.35em]">
            O GRANDE DIA
          </p>

          <h2
            className="mt-4 text-3xl text-[#6E7D98] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Será uma alegria celebrar esse momento com você.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl sm:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <CalendarDays
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-xs">
                Data
              </p>

              <h3
                className="mt-2 text-2xl text-[#6E7D98] sm:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                27 de Junho
              </h3>

              <p className="mt-1 text-sm text-gray-600 sm:text-base">Domingo • 2027</p>
            </div>

            <div className="text-center">
              <Clock3
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-xs">
                Horário
              </p>

              <h3
                className="mt-2 text-2xl text-[#6E7D98] sm:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                19:00
              </h3>

              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                Recepção pós-cerimônia
              </p>
            </div>

            <div className="text-center">
              <MapPin
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-xs">
                Local
              </p>

              <h3
                className="mt-2 text-2xl text-[#6E7D98] sm:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Casa Helenya
              </h3>

              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                Vila Prudente • SP
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center sm:mt-16">
            <a
              href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiQleCYi9aVAxUAAAAAHQAAAAAQCQ..i&pvq=Cg0vZy8xMXd2Y3docDAxIisKJWNhc2EgaGVsZW55YSB8IGJ1ZmZldCBldmVudG8gcGVyZmVpdG8QAhgD&lqi=CiVjYXNhIGhlbGVueWEgfCBidWZmZXQgZXZlbnRvIHBlcmZlaXRvSIGo373pu4CACFpHEAAQARACEAMQBBgAGAEYAhgDGAQiI2Nhc2EgaGVsZW55YSBidWZmZXQgZXZlbnRvIHBlcmZlaXRvKgwIAhAAEAEQAhADEASSAQ53ZWRkaW5nX2J1ZmZldA&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&ftid=0x94ce5d00291e2d03:0xe4522c4005f59aed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Como chegar</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}