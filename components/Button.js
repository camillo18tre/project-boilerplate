import React from 'react';
import Link from 'next/link';

import { Link as ScrollLink } from 'react-scroll';

const HoverEffect = () => (
  <div className="absolute top-0 left-0 w-full h-full duration-700 ease-in-out translate-y-full pointer-events-none bg-cream group-hover:translate-y-0"></div>
);

const Button = ({
  children,
  href,
  alt,
  type = 'link',
  onClick,
  primary,
  align = 'md:justify-center',
  dark,
  buttonClass,
  disabled = false,
}) => {
  //
  let style =
    'backface-hidden text-sm border border-white rounded-full px-3 py-1.5 md:px-5 md:py-2.5 uppercase tracking-wider overflow-hidden group relative hover:border-cream hover:text-darkBrown duration-700';
  if (primary) {
    style = `backface-hidden text-sm  border rounded-full px-3 py-1.5 md:px-5 md:py-2.5 uppercase tracking-wider group overflow-hidden relative duration-700 ${
      dark
        ? `bg-stone-900 text-cream border-stone-900  shadow-md ${
            !disabled ? 'hover:text-darkBrown' : ' text-cream/50'
          }`
        : 'bg-white text-black border-white hover:border-cream'
    }`;
  }

  if (type === 'link') {
    return (
      <div className={`flex text-base ${align ? align : ''}`}>
        <Link href={href}>
          <a className={style} alt={alt}>
            <div className="relative z-10">{children}</div>
            <HoverEffect />
          </a>
        </Link>
      </div>
    );
  }

  if (type === 'button') {
    return (
      <div className={`flex text-base ${align ? align : ''}`}>
        <button
          className={`${style} ${buttonClass}`}
          onClick={onClick}
          disabled={disabled}
        >
          <div className="relative z-10">{children}</div>
          {!disabled && <HoverEffect />}
        </button>
      </div>
    );
  }

  if (type === 'scrollTo') {
    return (
      <ScrollLink
        href="#"
        activeClass="active"
        to={href}
        smooth="easeInOutQuint"
        // spy={true}
        offset={-100}
        duration={1400}
        delay={100}
        className={`${style} flex items-center`}
      >
        <span className="relative z-20">{children}</span>
        <HoverEffect />
      </ScrollLink>
    );
  }
};

export default Button;
