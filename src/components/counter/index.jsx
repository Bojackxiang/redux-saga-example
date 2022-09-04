import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // use the value in the redux
  const { count } = useSelector((state) => state.counter);

  // dispatch the action to the redux
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>minus</button>
    </div>
  );
};

export default Counter;
