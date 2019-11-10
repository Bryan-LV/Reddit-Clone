import React from 'react'

export default function Validation(props) {
  return (
    <div className="validation">
      <p className="error-message">{props.message}</p>
    </div>
  )
}
