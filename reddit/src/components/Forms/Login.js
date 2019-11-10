import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const userLogin = {email,password}
    axios.post('http://localhost:4000/auth', userLogin)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  return (
    <form className="login-form form-wrapper" onSubmit={handleSubmit}>
      <div className="login-form-inner-wrapper form-inner-wrapper">
        <h2 className="login-form-title">Login and Enjoy!</h2>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="login-form-btn form-btn">Login</button>
        <Link to="/signup" className="greyed-link">Don't have an account?</Link>
      </div>
    </form>
  )
}
