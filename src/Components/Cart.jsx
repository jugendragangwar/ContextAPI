import { useContext } from "react";
import { CartContext } from "../Context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

      {cart &&
        cart.item.map((item) => (
          <li
          key={name}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-gray-700">{item.name}</span>
            <span className="text-gray-900 font-medium">₹{item.price}</span>
          </li>
        ))}

      <button className="mt-6 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
