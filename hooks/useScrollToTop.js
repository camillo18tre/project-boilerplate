import { useEffect } from 'react';

const useScrollToTop = router => {
  // just run the effect on pathname and/or search change
  useEffect(() => {
    setTimeout(() => {
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          // behavior: 'smooth',
        });
      } catch (error) {
        // just a fallback for older browsers
        //   console.log(error);
        window.scrollTo(0, 0);
      }
    }, 1500);
  }, [router.asPath]);

  // renders nothing, since nothing is needed
  return null;
};

export default useScrollToTop;
