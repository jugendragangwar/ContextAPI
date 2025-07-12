import { useContext } from "react";
import { CartContext } from "../Context/Cart";

const ItemCart = (props) => {
  const cart = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-sm bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h1>
      <h1 className="text-lg text-gray-600 mb-4">₹{props.price}</h1>
      <button
        onClick={() =>
          cart.setItem([
            ...cart.item,
            { name: props.name, price: props.price },
          ])
        }
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCart;
