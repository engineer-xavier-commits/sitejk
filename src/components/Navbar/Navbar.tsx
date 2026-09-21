export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between gap-3 bg-white/55 px-3 py-2 backdrop-blur-md sm:px-7 sm:py-3">
      <div className="relative flex h-8 w-10 shrink-0 items-center sm:h-10 sm:w-16">
        <span
          className="absolute left-0 top-[-16px] text-[56px] leading-none text-[#6E7D98] sm:top-[-25px] sm:text-[120px]"
          style={{ fontFamily: "'Panton Arabe'" }}
        >
          J
        </span>

        <span
          className="absolute left-[10px] top-[8px] text-[42px] leading-none text-[#6E7D98] sm:left-[20px] sm:top-[19px] sm:text-[95px]"
          style={{ fontFamily: "'Panton Arabe'" }}
        >
          K
        </span>
      </div>

      <ul className="flex flex-wrap items-center justify-end gap-2 text-[9px] uppercase tracking-[0.12em] text-[#6E7D98] sm:gap-6 sm:text-xs lg:gap-8 lg:text-sm">
        <li>
          <a href="#inicio" className="transition hover:text-[#52627C]">
            Início
          </a>
        </li>

        <li>
          <a href="#historia" className="transition hover:text-[#52627C]">
            História
          </a>
        </li>

        <li>
          <a href="#casamento" className="transition hover:text-[#52627C]">
            Casamento
          </a>
        </li>

        <li>
          <a href="#rsvp" className="transition hover:text-[#52627C]">
            RSVP
          </a>
        </li>
      </ul>
    </nav>
  );
}