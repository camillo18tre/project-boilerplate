import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';
import { ApolloProvider } from '@apollo/client';
import { isMobile } from 'react-device-detect';

import { client } from '../utils/client';
import useScrollToTop from '../hooks/useScrollToTop';

import '../styles/globals.css';
import MainLayout from '../layout/MainLayout';
import CartSlideOver from '../components/shop/CartSlideOver';

import Cookie from '../svgs/Cookie';

import CartContextProvider from '../context/CartContext';
import TranslationContextProvider from '../context/TranslationContext';

import { translation as en } from '../locales/en';
import { translation as it } from '../locales/it';
import Cursor from '../components/Cursor';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : it;

  // useScrollToTop(router);

  // Google analytics effect
  useEffect(() => {
    const handleRouteChange = url => {
      window?.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
      //
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ApolloProvider client={client}>
        <TranslationContextProvider>
          <CartContextProvider>
            <MainLayout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />;
              </AnimatePresence>
            </MainLayout>
            <CartSlideOver></CartSlideOver>
          </CartContextProvider>
        </TranslationContextProvider>
      </ApolloProvider>
      {!isMobile && <Cursor />}
      <div className="fixed bottom-5">
        <div className="flex justify-center w-screen">
          <CookieConsent
            acceptOnScroll
            acceptOnScrollPercentage={20}
            disableStyles
            cookieName="dtcookie_el_valet"
            containerClasses="z-50 w-full md:w-96 p-6 text-lg text-white bg-cream shadow-xl text-center text-darkBrown rounded-sm"
            buttonClasses="text-white hover:bg-darkBrown uppercase mt-5 transition duration-500 ease-in-out text-xs bg-lightBrown px-4 py-2.5 rounded-full text-base"
            buttonText="Ho capito!"
          >
            <div className="flex justify-center mb-5">
              <Cookie />
            </div>
            {t.cookie_intro}.
          </CookieConsent>
        </div>
      </div>
    </>
  );
}

export default MyApp;
