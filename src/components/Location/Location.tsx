import Button from "../Button/Button";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="casamento"className="bg-[#F8F6F2] py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Título */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#6E7D98]">
            O GRANDE DIA
          </p>

          <h2
            className="mt-4 text-5xl text-[#6E7D98]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Será uma alegria celebrar esse momento com você.
          </h2>
        </div>

        {/* Informações */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Data */}
            <div className="text-center">
              <CalendarDays
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gray-500">
                Data
              </p>

              <h3
                className="mt-2 text-3xl text-[#6E7D98]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                27 de Junho
              </h3>

              <p className="mt-1 text-gray-600">Domingo • 2027</p>
            </div>

            {/* Horário */}
            <div className="text-center">
              <Clock3
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gray-500">
                Horário
              </p>

              <h3
                className="mt-2 text-3xl text-[#6E7D98]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                19:00
              </h3>

              <p className="mt-1 text-gray-600">
                Recepção pós-cerimônia
              </p>
            </div>

            {/* Local */}
            <div className="text-center">
              <MapPin
                size={34}
                strokeWidth={1.5}
                className="mx-auto text-[#6E7D98]"
              />

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gray-500">
                Local
              </p>

              <h3
                className="mt-2 text-3xl text-[#6E7D98]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Casa Helenya
              </h3>

              <p className="mt-1 text-gray-600">
                Vila Prudente • SP
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
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