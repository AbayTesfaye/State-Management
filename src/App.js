import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch(console.error("error occur"));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}
export default App;
