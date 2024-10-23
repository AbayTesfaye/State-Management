import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}
export default App;
