import React from 'react'

export default function Posts(props) {
  return (
    <div className="post-row">
      <h1 className="post-title">{props.title}</h1>
      <p className="post-desc">{props.desc}</p>
    </div>
  )
}
