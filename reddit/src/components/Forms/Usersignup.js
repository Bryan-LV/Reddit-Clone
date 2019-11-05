import React,{ useState } from 'react'
import axios from 'axios'

export default function UserSignup(props) {
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const userSignup = {name, username, password};
    axios.post('http://localhost:4000/signup', userSignup)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form-inner-wrapper">
        <h2 className="signup-form-title">Sign Up and Enjoy!</h2>
        <input type="text" placeholder="Your Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Enter a Username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder="Create password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="signup-form-btn">Sign Up</button>
      </div>
    </form>
  )
}
