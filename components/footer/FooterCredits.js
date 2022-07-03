import React from 'react';

const FooterCredits = () => {
  return (
    <div className="flex justify-center tracking-wide">
      <p className="text-sm">
        Credits: website designed and developed by{' '}
        <a
          href="https://camillobovio.com"
          className="italic duration-700 ease-in-out hover:underline"
          alt="Camillo Bovio web designer"
        >
          Camillo Bovio
        </a>
        .
      </p>
    </div>
  );
};

export default FooterCredits;
