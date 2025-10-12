import React from 'react' 
import {useGetPostsQuery,useCreatePostsMutation} from './services/JsonPlaceholderApi';

function App() { 
  const {data,error,isLoading} = useGetPostsQuery();

  if(isLoading) return <h3>Loading...</h3> ; 
  if(error) return <h3>error...</h3> ;

  console.log(data)

  return (
    <div>App</div>
  )
}

export default App