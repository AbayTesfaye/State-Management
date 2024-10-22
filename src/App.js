import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>
        Hello {name.firstName} {name.lastName}
      </h1>
      <input
        placeholder="Enter first name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        placeholder="Enter last name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
    </div>
  );
}
export default App;
