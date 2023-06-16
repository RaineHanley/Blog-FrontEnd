export function PostsShow(props) {
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>Author: {props.post.author}</p>
      <p>Title: {props.post.title}</p>
      <p>Image: {props.post.image}</p>
      <p>Content: {props.post.content}</p>
    </div>
  );
}
