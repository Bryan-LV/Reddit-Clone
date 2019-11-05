import React, { useState } from 'react'
import axios from 'axios'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handling login');
    const userLogin = {username,password}
    axios.post('http://localhost:4000/login', userLogin)
      .then(res => console.log(res));
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form-inner-wrapper">
        <h2 className="login-form-title">Login and Enjoy!</h2>
        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="login-form-btn">Login</button>
      </div>
    </form>
  )
}
