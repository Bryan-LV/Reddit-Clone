import React, { useState } from 'react'
import axios from 'axios'

export default function NewPost(props) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {title, desc};
    axios.post('http://localhost:4000/post', newPost)
      .then(post => console.log(post))
      .catch(err => console.log(err));
  }

  return (
    <div className="new-post-wrapper" onSubmit={handleSubmit}>
      <form className="new-post-form">
        <h1 className="new-post-title">Create a new post</h1>
        <input type="text" name="title" placeholder="Enter a title for your post" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" name="desc" placeholder="Body of you post" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <button type="submit" className="create-post-btn">Create Post</button>
      </form>
    </div>
  )
}
