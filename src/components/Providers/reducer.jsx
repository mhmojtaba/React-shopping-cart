import { toast } from "react-toastify";

const addToCart = (state, action) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item.id === action.payload.id);
  if (index < 0) {
    updatedCart.push({ ...action.payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[index] };
    updatedItem.quantity++;
    updatedCart[index] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + action.payload.offPrice,
  };
};

const removeFromCart = (state, action) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item.id === action.payload.id);
  const updatedItem = { ...updatedCart[index] };
  if (action.payload.quantity === 1) {
    const filteredCart = updatedCart.filter(
      (item) => item.id !== action.payload.id
    );
    toast.error(`'${action.payload.name}' removed from cart`);
    return {
      ...state,
      cart: filteredCart,
      total: state.total - action.payload.offPrice,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[index] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - action.payload.offPrice,
    };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);

    case "DECREMENT":
      return removeFromCart(state, action);

    default:
      return state;
  }
};

export default cartReducer;
