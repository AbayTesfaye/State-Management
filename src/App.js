import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error occurred: ", error));
  }, [id]); // Dependency array added to prevent continuous API calls

  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  );
}

export default App;
