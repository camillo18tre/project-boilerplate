import { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  let filteredItems = [];

  switch (action.type) {
    case 'add-product-to-cart':
      const cartItems = [...state.items, action.payload.product];
      localStorage.setItem('elvalet_shop_cart', JSON.stringify(cartItems));

      return {
        isCartOpen: true,
        counter: cartItems.length,
        items: cartItems,
      };

    case 'remove-group-from-cart':
      let isEmptyCart;
      filteredItems = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('elvalet_shop_cart', JSON.stringify(filteredItems));
      console.log(filteredItems.length);

      filteredItems.length === 0 ? (isEmptyCart = true) : (isEmptyCart = false);

      return {
        isCartOpen: isEmptyCart ? false : true,
        counter: filteredItems.length,
        items: filteredItems,
      };

    case 'clear-cart-session':
      localStorage.removeItem('elvalet_shop_cart');

      return {
        isCartOpen: false,
        counter: 0,
        items: [],
      };

    case 'remove-single-product':
      filteredItems = [];

      let isRemovedItem = false;
      state.items.map((item, index) => {
        if (item.id === action.payload.id && isRemovedItem !== true) {
          isRemovedItem = true;
          return;
        }
        filteredItems.push(item);
      });

      return {
        isCartOpen: true,
        counter: filteredItems.length,
        items: filteredItems,
      };

    case 'toggle-cart':
      return {
        isCartOpen: !state.isCartOpen,
        counter: state.counter,
        items: [...state.items],
      };

    case 'update-default':
      return {
        isCartOpen: false,
        counter: action.payload.items.length,
        items: action.payload.items,
      };

    default:
      return {
        isCartOpen: false,
        counter: 0,
        items: [],
      };
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    isCartOpen: false,
    counter: 0,
    items: [],
  });

  useEffect(() => {
    // useEffect avoid error localStorage is not defined
    const cartItems =
      JSON.parse(localStorage.getItem('elvalet_shop_cart')) || [];
    dispatch({
      type: 'update-default',
      payload: {
        isCartOpen: false,
        counter: cartItems.length,
        items: cartItems,
      },
    });
  }, []);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
