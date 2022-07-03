import React from 'react';
import ShopProduct from './ShopProduct';

const ShopContainer = ({ locale, products, t }) => {
  return (
    <div className="grid justify-center gap-10 md:grid-cols-3">
      {products.map(product => (
        <ShopProduct t={t} key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopContainer;
