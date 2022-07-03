import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMousePosition } from 'react-haiku';
import BackgroundImage from './BackgroundImage';
import LanguageSelector from './LanguageSelector';
import Separator from './Separator';
import mainMenu from '../data/menu.json';
import { TranslationContext } from '../context/TranslationContext';

const Menu = ({ handleChangeLang, selectedLanguage, setIsOpen }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLinkHovering, setIsLinkHovering] = useState(false);
  const { target, x, y } = useMousePosition();

  const { t, locale } = useContext(TranslationContext);

  const menuTranslated = mainMenu[locale];
  const menu = menuTranslated.filter(item => item.type !== 'social');

  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center"
      ref={target}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative z-10 flex items-center justify-center flex-1">
        <div>
          <h3 className="mb-5 text-sm tracking-wider uppercase text-cream">
            Menu
          </h3>
          <ul className="text-2xl tracking-wider text-white uppercase -translate-x-2 md:text-4xl">
            {menu.map((item, index) => (
              <li key={index} className="flex justify-center py-2 md:py-3">
                <p className="inline-block pointer-events-none">
                  <span className="mr-2 text-sm text-white/20 ">
                    0{index + 1}
                  </span>
                </p>
                <Link href={item.href}>
                  <a
                    className="inline-block h-10 overflow-hidden group"
                    onMouseEnter={() => setIsLinkHovering(true)}
                    onMouseLeave={() => setIsLinkHovering(false)}
                    onClick={() => setIsOpen(prevState => !prevState)}
                  >
                    <span className="inline-block duration-700 ease-in-out scale-100 opacity-100 group-hover:-translate-y-10 group-hover:opacity-0 group-hover:scale-90">
                      {item.label}
                    </span>
                    <span className="block duration-700 ease-in-out scale-90 opacity-0 group-hover:-translate-y-10 text-cream group-hover:opacity-100 group-hover:scale-100">
                      {item.label}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Separator />
          <LanguageSelector
            handleChangeLang={handleChangeLang}
            selectedLanguage={selectedLanguage}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      {/* <div className="relative z-10 flex items-end pb-10 tracking-wider uppercase">
        <ul className="flex gap-5 text-white">
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">AirBnb</a>
          </li>
          <li>
            <a href="">Get Your Guide</a>
          </li>
        </ul>
      </div> */}

      <div
        className={`duration-700 opacity-50 ${
          isLinkHovering ? 'opacity-20' : ''
        }`}
      >
        <BackgroundImage
          src="/images/menu_bg.jpg"
          alt="El Valet Canelli truffle hunt"
          hoverScaleClass={isHovering}
          mousePosition={{ x, y }}
        />
      </div>
    </div>
  );
};

export default Menu;
