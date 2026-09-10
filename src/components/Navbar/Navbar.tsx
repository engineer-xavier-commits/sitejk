export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-white/50 px-4 py-3 backdrop-blur-md sm:px-7">

      {/* MONOGRAMA */}
      <div className="relative flex h-5 w-23 items-center">

        <span
          className="absolute left-0 top-[-25px] text-[120px] leading-none text-[#6E7D98]"
          style={{ fontFamily: "'Panton Arabe'" }}
        >
          J
        </span>

        <span
          className="absolute left-[20px] top-[19px] text-[95px] leading-none text-[#6E7D98]"
          style={{ fontFamily: "'Panton Arabe'" }}
        >
          K
        </span>

      </div>


      <ul className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.2em] text-[#6E7D98] sm:gap-8 sm:text-sm">
        <li>
          <a href="#inicio" className="transition hover:text-[#52627C]">
            Início
          </a>
        </li>

        <li>
          <a href="#historia" className="transition hover:text-[#52627C]">
            Nossa História
          </a>
        </li>

        <li>
          <a href="#casamento" className="transition hover:text-[#52627C]">
            Casamento
          </a>
        </li>
{/* 
        <li>
          <a href="#presentes" className="transition hover:text-[#52627C]">
            Presentes
          </a>
        </li> */}

        <li>
          <a href="#rsvp" className="transition hover:text-[#52627C]">
            RSVP
          </a>
        </li>
      </ul>

    </nav>
  );
}