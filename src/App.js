import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("the useEffect is called!");
    document.title = `React ${count}`;
  }, [count]);

  return (
    <div>
      <input
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
export default App;
