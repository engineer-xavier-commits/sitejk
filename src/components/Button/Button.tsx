type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        mt-12
        rounded-full
        border
        border-[#6E7D98]
        px-8
        py-4
        uppercase
        tracking-[0.2em]
        text-[#6E7D98]
        transition-all
        duration-300
        hover:bg-[#6E7D98]
        hover:text-white
      "
    >
      {children}
    </button>
  );
}