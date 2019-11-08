import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Hero(props) {
  return (
    <div className="hero">
     <div className="hero-inner-wrapper">
      <h1 className="hero-title title teal">Reddit Mock</h1>
      <p className="hero-paragraph medium-text white">Built a Reddit type application where users can create accounts (with auth), perform CRUD operations with their accounts and posts, comment, and vote.</p>
      <h2 className="hero-sub-title large-text white">Using the <span className="orange">MERN</span> stack.</h2>
      <div className="hero-btn-wrapper">
        <Link to="/signup" className="signup-hero-link"><button className="signup-btn hero-btn">Sign Up</button></Link>
        <Link to="/login" className="login-hero-link "><button className="login-btn hero-btn">Login</button></Link> 
      </div>
     </div>
    </div>
  )
}