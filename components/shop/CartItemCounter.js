import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItemCounter = ({ maxCounter, items }) => {
  const { cartState, dispatch } = useContext(CartContext);

  //   console.log(cartState);

  const removeItem = () => {
    if (items.length > 1) {
      dispatch({
        type: 'remove-single-product',
        payload: {
          id: items[0].id,
          item: items[0],
        },
      });
    }
  };

  const addItem = () => {
    if (items.length <= maxCounter) {
      dispatch({
        type: 'add-product-to-cart',
        payload: {
          id: items[0].id,
          product: items[0],
        },
      });
    }
  };

  return (
    <div className="flex gap-5 py-2 text-white">
      <button className="text-2xl" type="button" onClick={() => removeItem()}>
        -
      </button>
      <div className="w-5 text-lg text-center">{items.length}</div>
      <button className="text-2xl" type="button" onClick={() => addItem()}>
        +
      </button>
    </div>
  );
};

export default CartItemCounter;
