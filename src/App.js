import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttonIdClicked, setButtonIdClicked] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonIdClicked}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error occurred: ", error));
  }, [buttonIdClicked]); // Dependency array added to prevent continuous API calls

  const handleClick = () => {
    setButtonIdClicked(id);
  };
  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => handleClick()}>Fetch</button>
      <h1>{post.title}</h1>
    </div>
  );
}

export default App;
