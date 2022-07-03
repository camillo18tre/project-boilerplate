import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import Button from './Button';
import HamburgerIcon from './HamburgerIcon';
import BasketIcon from '../svgs/BasketIcon';
import Logo from './Logo';
import { TranslationContext } from '../context/TranslationContext';

const Navbar = ({ isOpen, setIsOpen }) => {
  const { cartState, dispatch } = useContext(CartContext);
  const { t } = useContext(TranslationContext);

  return (
    <motion.div
      className="fixed top-0 left-0 z-30 grid w-full grid-cols-3 px-4 py-2 md:px-5 md:py-4"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    >
      <div className="flex py-2">
        <Button href="/booking">{t.btn_book_now}</Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="translate-y-1.5">
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 md:gap-3">
        <div className="flex items-center">
          <button
            className="flex gap-2 text-center scale-75 md:gap-3"
            onClick={() => dispatch({ type: 'toggle-cart' })}
            disabled={cartState.counter < 1}
          >
            {cartState.counter && (
              <p className="mt-1 text-sm ">{cartState.counter}</p>
            )}
            <div className="-mt-1">
              <BasketIcon />
            </div>
          </button>
        </div>
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.div>
  );
};

export default Navbar;
