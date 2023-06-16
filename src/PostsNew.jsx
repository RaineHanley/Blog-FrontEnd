export function PostsNew() {
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
