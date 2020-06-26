import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch('/api/2560796474159112/1').then(res => res.json()).then(res => console.log(res));
    fetch("http://localhost:8000/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);
  return (
    <div className="home">
      <h1>Home</h1>
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <p>{post.title.rendered}</p>
            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
