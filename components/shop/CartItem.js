import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItemCounter from './CartItemCounter';

const CartItem = ({ items, last }) => {
  const { dispatch } = useContext(CartContext);

  const handleRemoveGroupFromCart = () => {
    dispatch({
      type: 'remove-group-from-cart',
      payload: { id: items[0].id },
    });
  };

  return (
    <div className={`py-10 ${!last ? 'border-b border-cream/50' : ''}`}>
      <div className="flex gap-5">
        <div className="w-32">
          <Image
            alt={items[0].sku}
            src={items[0].image.url}
            width={items[0].image.width}
            height={items[0].image.height}
          />
        </div>
        <div className="w-60">
          <div className="">
            <div className="flex items-start justify-between">
              <h4 className="mb-2 mr-10 text-xl leading-5 tracking-wider uppercase text-cream">
                {items[0].localizations[0].name}
              </h4>
              <button type="button" onClick={() => handleRemoveGroupFromCart()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white duration-700 hover:text-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            <p className="text-white">
              <span className="text-xl">{items[0].price * items.length} €</span>{' '}
              <span className="text-gray-400">
                - {items[0].weight * items.length} gr
              </span>
            </p>
          </div>
          {/*  */}
          <CartItemCounter maxCounter={items[0].quantity} items={items} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
