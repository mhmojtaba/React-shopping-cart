import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "./reducer";
// import { orderBy } from "lodash";

// // const initialState = [
// //   { name: "react", price: "99$", quantity: 1, id: 1 },
// //   { name: "Node", price: "89$", quantity: 5, id: 2 },
// //   { name: "Next", price: "79$", quantity: 3, id: 3 },
// // ];

// // const reducer = (state, action) => {
// //   switch (action.tye) {
// //     case "addOne":
// //       return state + action.value;
// //     case "addFive":
// //       return state + action.value;
// //     case "decrement":
// //       return state - action.value;
// //     case "reset":
// //       return initialState;
// //     default:
// //       return state;
// //   }
// // };

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
