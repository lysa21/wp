import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post(props) {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0)
  let { id } = useParams();

  useEffect(() => {
    // fetch('/api/2560796474159112/1').then(res => res.json()).then(res => console.log(res));
    fetch(`http://localhost:8000/wp-json/wp/v2/posts/${id}`)
      .then((res) => res.json())
      .then((res) => {
          setPost(res)
          setLikes(res.acf.likes)
        });
  }, []);

  function addOneLike() {
    console.log("tutu");
    fetch(`http://localhost:8000/wp-json/wp/v2/likes/${id}`, {
      method: "post",
    }).then(res=> res.json()).then(res => {
        console.log(res)
       setLikes(res.likes)
        console.log(res)
    });
  }

  return (
    <div className="post">
      <h1>Home</h1>
      {post ? (
        <div>
          <p> {post.id}</p>
          <button onClick={addOneLike}>{likes ? likes : 0}</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Post;
