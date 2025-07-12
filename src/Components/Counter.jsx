import { useContext } from "react";
import { CounterContext } from "../Context/Counter";

const Counter = () => {
  const Counter = useContext(CounterContext);

  return (
    <div className="flex gap-4 p-4">
      <button
        onClick={() => Counter.setCount(Counter.count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <button
        onClick={() => Counter.setCount(Counter.count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
