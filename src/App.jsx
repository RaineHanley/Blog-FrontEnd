import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">N</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        Image: <input type="text" />
        <div>
          Content: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div className="posts" key={post.id}>
          <h2> {post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>Author: Raine Hanley</p>
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([11]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
