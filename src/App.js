import { useReducer } from "react";
import "./App.css";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function App() {
  const [count, Dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => Dispatch("increament")}>Increment</button>
      <button onClick={() => Dispatch("decreament")}>Decrement</button>
      <button onClick={() => Dispatch("reset")}>Reset</button>
    </div>
  );
}
export default App;
