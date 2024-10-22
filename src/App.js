import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <button onClick={handleCount}>{count}</button>
    </div>
  );
}

export default App;
