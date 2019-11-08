import React,  {useState, useEffect} from 'react'
import Nav from '../Nav'
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
    <>
    <Nav/>
    <div className="home">
      <div className="user-container">
        <div className="home-user-avatar"></div>
        <h1 className="home-user-name">Username</h1>
        <p className="sub-title small-text">Bio: sequi laborum, quas aut laboriosam deleniti itaque ipsa blanditiis voluptas inventore excepturi labore ipsum. Deleniti </p>
      </div>
      <div className="post-container">
        {createPosts()}
      </div>
    </div>
    </>
  )
}
