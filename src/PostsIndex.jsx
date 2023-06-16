export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>Author: {post.author}</p>
          <button onClick={() => props.onShowPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
