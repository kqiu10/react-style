import React from 'react'
import User from './User'
const UsersList = ({users}) => {
  return (
    <div>
      {users.map((user) => <User name={user.name} age={user.age}/>)}
    </div>
  )
}

export default UsersList
