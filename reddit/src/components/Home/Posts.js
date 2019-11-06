import React from 'react'

export default function Posts(props) {
  return (
    <div className="post-row">
      <h1 className="post-title">{props.title}</h1>
      <p className="post-desc">{props.desc}</p>
      <div className="user-post-tag">
        <div className="user-post-avatar"></div>
        <h5 className="user-post-name">User: Name</h5>
      </div>
    </div>
  )
}
