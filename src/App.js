import "./App.css";
import { useState } from "react";
function App() {
  const [list, setList] = useState(["Abay", "Dani", "Asme"]);
  const [name, setName] = useState();

  function handleInput(e) {
    setName(e.target.value);
  }

  function addName() {
    setList([...list, name]);
  }

  return (
    <div>
      <h1>List of Student </h1>
      {list.map((name) => {
        return (
          <ul>
            <li key={name}>{name}</li>
          </ul>
        );
      })}
      <div>
        <input type="text" onChange={handleInput} />
        <button onClick={addName}>Add Name</button>
      </div>
    </div>
  );
}
export default App;
