import Image from 'next/image';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from '../Button';

const ShopProduct = ({ t, product }) => {
  const { cartState, dispatch } = useContext(CartContext);

  const prodAvailable = product.quantity > 0 && product.inStock;

  const addProductToCart = () => {
    dispatch({
      type: 'add-product-to-cart',
      payload: {
        product,
      },
    });
  };

  return (
    <div
      className={`${
        !prodAvailable ? 'opacity-75' : ''
      } rounded-md bg-lightBrown/95 duration-700`}
    >
      <div className="mb-10 -translate-y-3">
        <h2 className="text-2xl tracking-wider text-center uppercase text-cream">
          {product.localizations[0].name}
        </h2>
        <p className="text-xs tracking-widest text-center uppercase">
          {product.localizations[0].type}
        </p>
      </div>
      <div className="px-10 my-5 scale-110">
        <Image
          alt={product.localizations[0].name}
          src={product.image.url}
          width={product.image.width}
          height={product.image.height}
        />
      </div>
      <div className="translate-y-5">
        <p className="mb-2 tracking-widest text-center">
          {product.price} € - {product.weight} gr
        </p>

        {prodAvailable ? (
          <Button
            type="button"
            align="justify-center"
            onClick={() => addProductToCart()}
            primary
            dark
          >
            {t.btn_add_to_cart}
          </Button>
        ) : (
          <Button align="justify-center" type="button" primary dark disabled>
            {t.btn_not_available}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ShopProduct;
