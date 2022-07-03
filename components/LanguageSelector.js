function LanguageSelector({ selectedLanguage, handleChangeLang, setIsOpen }) {
  return (
    <div className="mt-20 text-lg uppercase md:text-xl">
      <button
        className={`${
          selectedLanguage === 'it' ? 'text-cream' : 'text-white'
        } mr-5 uppercase hover:text-cream duration-700 ease-in-out tracking-wider`}
        onClick={() => {
          handleChangeLang('it');
          setIsOpen(prevState => !prevState);
        }}
      >
        Italiano
      </button>
      <button
        className={`${
          selectedLanguage === 'en' ? 'text-cream' : 'text-white'
        } uppercase tracking-wider`}
        onClick={() => {
          handleChangeLang('en');
          setIsOpen(prevState => !prevState);
        }}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSelector;
