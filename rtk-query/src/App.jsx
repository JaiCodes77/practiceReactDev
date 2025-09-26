import React from 'react' 
import { useGetPostByIdQuery,useGetPostsQuery,useAddPostMutation } from './services/JsonPlaceHolderApi'

function App() { 
  const {data : posts,error,isLoading} = useGetPostsQuery();
  const {data: singlePost} = useGetPostByIdQuery(1);
  const [addPost] = useAddPostMutation();

  if(isLoading) return <p>...Loading</p>;
  if(error) return <p>...error</p>;

  return (
    <div>
      <h2>RTK Query Practice</h2>
      <h3>All posts</h3>
      {posts && posts.slice(0,5).map(post=>(<li key={post.id}>{post.title}</li>))}

      <h3>singlePost</h3>
      {singlePost && <p>{singlePost.title}</p>}

       <button 
        onClick={() => addPost({ title: 'Hello RTK Query', body: 'Learning...', userId: 1 })}
      >
        Add Post
      </button>
    </div>
  )
}

export default App