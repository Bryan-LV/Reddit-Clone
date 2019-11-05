import React,  {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts';

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/post')
      .then(posts => setPosts(posts.data))
      .catch(err => console.error(err));
  },[])

  function createPosts() {
    const allPosts = posts.map(post => <Posts title={post.title} desc={post.desc} />)
    return allPosts
  }

  return (
    <div className="home">
      <h1>Welcome to Reddit Homepage!</h1>
      {createPosts()}
    </div>
  )
}
