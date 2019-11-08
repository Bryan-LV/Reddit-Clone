import React,{ useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function UserSignup(props) {
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [bio, setBio] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const userSignup = {name, username, password, bio};
    axios.post('http://localhost:4000/signup', userSignup)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <form className="signup-form form-wrapper" onSubmit={handleSubmit}>
      <div className="signup-form-inner-wrapper form-inner-wrapper">
        <h2 className="signup-form-title">Create an account</h2>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Your Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter a Username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Create password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="bio">Story time</label>
        <textarea placeholder="bio" name="bio" id="bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
        <button className="signup-form-btn form-btn">Sign Up</button>
        <Link to="/login" className="greyed-link">Already have an account?</Link>
      </div>
    </form>
  )
}
