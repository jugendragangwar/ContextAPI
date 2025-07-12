import Cart from "./Components/Cart";
import ItemCart from "./Components/ItemCart";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8 gap-8">
      {/* Item List */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Products</h2>
        <ItemCart name="Natural Honey" price="300" />
        <ItemCart name="Raw Honey" price="340" />
      </div>

      {/* Cart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <Cart />
      </div>
    </div>
  );
};

export default App;
