import React from 'react'

const User = (props) => {
  return (
    <ul >
      <li >{props.name} ({props.age} years old)</li>
    </ul>
  )
}

export default User
