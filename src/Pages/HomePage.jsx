import { toast } from "react-toastify";
import { useCart, useCartAction } from "../components/Providers/CartProvider";
import * as data from "../db/productData";
import { NavLink } from "react-router-dom";
import { useAuth } from "../components/Providers/AuthProvider";

const HomePage = () => {
  const user = useAuth();
  const state = useCart();
  const dispatch = useCartAction();
  //console.log(state.cart);
  console.log(user);

  const addToCartHandler = (product) => {
    // console.log(product);
    const findProductInCart = state.cart.find((item) => item.id === product.id);
    if (findProductInCart) {
      return;
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success(`'${product.name}' added to cart!`);
      console.log(product);
    }
  };

  return (
    <main className="mt-8 w-screen h-full flex flex-col justify-center items-center mb-32">
      <h1 className="mb-3 text-2xl text-gray-500">Homepage</h1>
      <section className="flex flex-col justify-center items-center md:flex-row flex-wrap gap-y-8 md:gap-y-28 gap-x-10 ">
        {data.products.map((p) => (
          <div
            key={p.id}
            className="w-96 h-full md:w-1/3 lg:w-1/4 md:h-60 rounded-md"
          >
            <div className="product-img w-full h-full mb-3 rounded-md overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-6">
              <h3>{p.name}</h3>
              <p>{p.price} $</p>
            </div>
            <button
              onClick={() => addToCartHandler(p)}
              className="bg-sky-500 hover:bg-sky-600 mt-4 transition-all rounded-md w-full md:w-36 py-2 text-slate-50"
            >
              {!state.cart.find((item) => item.id === p.id) ? (
                "Add to Cart"
              ) : (
                <NavLink to="/carts">CheckOut</NavLink>
              )}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
