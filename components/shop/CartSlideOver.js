import React, { useContext, useEffect, useState } from 'react';
import { orderBy, groupBy } from 'lodash';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from '../Button';
import { TranslationContext } from '../../context/TranslationContext';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const overlayOptions = {
  initial: { opacity: 0, pointerEvents: 'none' },
  visible: { opacity: 1, pointerEvents: 'auto' },
};

const contentOptions = {
  initial: { x: '100%' },
  visible: { x: '0' },
};

const transition = { type: 'easeInOut', duration: 0.7 };

const CartSlideOver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartState, dispatch } = useContext(CartContext);
  const { t } = useContext(TranslationContext);

  const { items } = cartState;

  const orderedItem = orderBy(items, 'id');
  const groupedItems = groupBy(orderedItem, 'id');

  let total = 0;
  items.map(item => (total += item.price));

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Let's start the payment process
    const session = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: groupedItems,
        total: total,
      }),
    }).then(res => res.json());

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  useEffect(() => {
    if (cartState.isCartOpen) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [cartState.isCartOpen]);

  return (
    <div>
      <motion.div
        initial={overlayOptions.initial}
        animate={
          cartState.isCartOpen ? overlayOptions.visible : overlayOptions.initial
        }
        transition={transition}
        className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm"
        onClick={() =>
          dispatch({
            type: 'toggle-cart',
          })
        }
      >
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/60"></div>
      </motion.div>

      <div className="relative z-50">
        <motion.div
          initial={contentOptions.initial}
          animate={
            cartState.isCartOpen
              ? contentOptions.visible
              : contentOptions.initial
          }
          transition={transition}
          className="fixed top-0 right-0 z-50 w-screen h-screen px-10 pb-10 overflow-y-auto pt-14 md:pt-16 bg-stone-800 custom-scrollbar md:w-auto"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 ">
              <button
                onClick={() => {
                  dispatch({
                    type: 'toggle-cart',
                  });
                }}
                className="absolute mb-10 text-sm text-right uppercase text-cream top-5 right-5"
              >
                {t.btn_close}
              </button>
              <h1 className="mb-10 text-3xl leading-8 text-cream">
                {t.cart_title}
              </h1>
              <div>
                {Object.keys(groupedItems).map((key, index) => {
                  return (
                    <CartItem
                      key={key}
                      items={groupedItems[key]}
                      last={Object.keys(groupedItems).length === index + 1}
                    />
                  );
                })}
              </div>
            </div>

            {Object.keys(groupedItems).length > 0 && (
              <div>
                <div className="w-full h-10">
                  <Button
                    onClick={() => handleCheckout()}
                    buttonClass="w-full"
                    type="button"
                    primary
                    dark
                  >
                    <span className="text-white duration-700 group-hover:text-black">
                      {t.cart_total}: {total}€ {' • '}
                    </span>
                    {t.cart_go_to} checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartSlideOver;
