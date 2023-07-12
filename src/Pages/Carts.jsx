import { NavLink } from "react-router-dom";
import { useCart, useCartAction } from "../components/Providers/CartProvider";

const Carts = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();

  const incrementHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementHandler = (item) => {
    dispatch({ type: "DECREMENT", payload: item });
  };

  if (!cart.length) {
    return (
      <div className="mt-8 flex justify-center">
        <main className="flex flex-col items-center">
          <p className="mb-3 text-2xl text-gray-500">no Item in cart!!</p>
          <NavLink
            className="bg-sky-500 hover:bg-sky-600 mt-4 transition-all rounded-md w-full md:w-36 p-2 text-slate-50"
            to="/"
          >
            Go to Shopping
          </NavLink>
        </main>
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center">
      <main className=" flex flex-col md:flex-row cartCenter md:justify-center gap-4">
        <section className="flex flex-col flex-1 rounded-md border border-gray-600 p-3 bg-white rounded-xl">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
            >
              <div className="w-28 h-28 rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div className=" px-2 py-1">
                <button
                  onClick={() => incrementHandler(item)}
                  className="border border-green-600 p-3 h-full rounded-l-md"
                >
                  +
                </button>
                <button className="p-3 border-y pointer-events-none border-green-600 h-full">
                  {item.quantity}
                </button>
                <button
                  onClick={() => decrementHandler(item)}
                  className="border border-green-600 p-3 h-full rounded-r-md"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </section>
        <CartSummery cart={cart} total={total} />
      </main>
    </div>
  );
};

export default Carts;

const CartSummery = ({ cart, total }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  return (
    <section className="flex flex-col md:w-1/3  rounded-md border border-gray-600 p-6 bg-white rounded-xl">
      cart summery
      <div className="h-1/3 flex flex-col justify-between mt-3 max-h-48">
        <div className="flex px-2  justify-between items-center mb-2">
          <p>total price</p>
          <p>
            {originalTotalPrice} <span className="ml-1 text-rose-700">$</span>
          </p>
        </div>
        <div className="flex px-2  justify-between items-center mb-2">
          <p>discount price</p>
          <p>
            {originalTotalPrice - total}{" "}
            <span className="ml-1 text-rose-700">$</span>
          </p>
        </div>
        <div className="flex px-2 border-t border-t-neutral-500 justify-between items-center mb-2">
          <p>net price</p>
          <p>
            {total} <span className="ml-1 text-rose-700">$</span>
          </p>
        </div>
        <NavLink to="/signup?redirect=checkout">
          <button className="bg-sky-500 hover:bg-sky-600 mt-4 transition-all rounded-md w-full  py-2 text-slate-50">
            CheckOut
          </button>
        </NavLink>
        <NavLink to="/">
          <button className="bg-red-500 hover:bg-red-600 mt-4 transition-all rounded-md w-full  py-2 text-slate-50">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </section>
  );
};
