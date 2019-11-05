import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Hero(props) {
  return (

    <div className="hero">
      <div className="hero-text">
      <h1 className="hero-title">Welcome To Reddit</h1>
      <p className="hero-subtitle">(not really tho)</p>
      <div className="hero-btn-container">
      <Link to="/signup" className="signup-hero-link"><button className="signup-btn">Create an account</button></Link>
      <Link to="/login" className="login-hero-link"><button className="login-btn">Login</button></Link>
      </div>
      </div>
    </div>
  )
}
