import React from 'react';

const ShopHeader = ({ t }) => {
  return (
    <div className="gap-5 mb-20">
      <div className="">
        <h1 className="mb-10 text-5xl leading-8 text-center text-cream">
          {t.shop_page_title}
        </h1>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          className="columns-2"
          dangerouslySetInnerHTML={{ __html: t.shop_page_description }}
        ></div>
      </div>
    </div>
  );
};

export default ShopHeader;
