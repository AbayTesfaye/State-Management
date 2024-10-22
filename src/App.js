import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    department: "",
  });

  function handleName(e) {
    setUserData({ ...userData, name: e.target.value });
  }
  function handleAge(e) {
    setUserData({ ...userData, age: e.target.value });
  }
  function handleDept(e) {
    setUserData({ ...userData, department: e.target.value });
  }
  function handleSubmit() {
    setProfile([...profile, userData]);
    setUserData({
      name: "",
      age: "",
      department: "",
    });
  }

  return (
    <div>
      <h1>User Profile</h1>
      <input
        onChange={handleName}
        placeholder="Enter name"
        value={userData.name}
      />
      <input onChange={handleAge} placeholder="Your age" value={userData.age} />
      <input
        onChange={handleDept}
        placeholder="Your Department"
        value={userData.department}
      />
      <button onClick={handleSubmit}>Submit</button>
      {console.log(profile)}
    </div>
  );
}
export default App;
