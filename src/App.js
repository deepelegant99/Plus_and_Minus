import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
import { useEffect } from "react";

export default function App() {
  const counter = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Something about redux</h1>
      <p>{counter}</p>
      <p>
        <button onClick={() => dispatch(increment(5))}>Plus</button>
        <button onClick={() => dispatch(decrement(5))}>Minus</button>
      </p>
    </div>
  );
}
