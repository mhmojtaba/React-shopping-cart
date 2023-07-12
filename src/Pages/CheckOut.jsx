import { useAuth } from "../components/Providers/AuthProvider";
import { useCart } from "../components/Providers/CartProvider";

const CheckOut = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  return (
    <div className=" flex flex-col items-center justify-between gap-4 mt-6">
      <div>CheckOUT</div>
      <div className="flex justify-between w-1/3">
        <div className="flex flex-col items-center  gap-8">
          <div>{auth.name}</div>
          <div>{auth.email}</div>
          <div>{auth.phoneNumber}</div>
        </div>
        <div>
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 border-b last:border-b-0 w-48"
              >
                <div>{item.name}</div>
                <div>
                  {item.price}*{item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9">total price : {total}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
