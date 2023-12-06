import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/products";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const posts = await response.json();
      setPosts(posts);
      console.log(posts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="heading">Grid Products</h1>
      <div className="products">
        {posts.map((post) => {
          return <Products data={post} key={post.id} />;
        })}
      </div>
    </>
  );
}

export default App;
