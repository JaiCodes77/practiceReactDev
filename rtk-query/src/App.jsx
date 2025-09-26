import React from "react";
import './App.css';
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useAddPostMutation,
} from "./services/JsonPlaceHolderApi";

function App() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const { data: singlePost } = useGetPostByIdQuery(1);
  const [addPost] = useAddPostMutation();

  if (isLoading) return <p>...Loading</p>;
  if (error) return <p>...error</p>;

  return (
    <div className="container"> 
    <div className="holder">
      <h2>RTK Query Practice</h2>
      <h3>All posts</h3>
      {posts &&
        posts.slice(0, 5).map((post) => <li key={post.id}>{post.title}</li>)}

      <h3>singlePost</h3>
      {singlePost && <p>{singlePost.title}</p>}
        </div>

      <button 
      className="btn"
        onClick={async () => {
          const result = await addPost({
            title: "learning rtk",
            id: 2,
            body: "learning...",
          });
          console.log("adding Posts", result);
        }}
      >
        Add Posts
      </button>
    </div>
  );
}

export default App;
