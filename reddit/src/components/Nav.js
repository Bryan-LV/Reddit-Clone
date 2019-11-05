import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav>
      <h1 className="brand">Reddit Mock</h1>
      <ul className="navbar-list">
        <li className="navbar-item"><NavLink to="/home">Home</NavLink></li>
        <li className="navbar-item"><NavLink to="/newPost">Create Post</NavLink></li>
        <li className="navbar-item">Profile</li>
      </ul>
    </nav>
  )
}
