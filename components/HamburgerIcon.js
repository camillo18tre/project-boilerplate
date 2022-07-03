const HamburgerIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`scale-75 flex flex-col gap-1.5 items-end duration-700 justify-center h-10 ${
        isOpen ? '-mt-3 ' : ''
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`w-10 bg-stone-900 h-0.5 ${
          isOpen ? 'rotate-45 translate-y-4' : ''
        } duration-700`}
      ></div>
      <div
        className={`bg-stone-900 h-0.5 ${
          isOpen ? 'w-0 translate-y-2' : 'w-10'
        } duration-700`}
      ></div>
      <div
        className={`w-10 bg-stone-900 h-0.5 ${
          isOpen ? '-rotate-45' : ''
        } duration-700`}
      ></div>
    </button>
  );
};

export default HamburgerIcon;
