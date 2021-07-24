import React from 'react'
import User from './User'
import classes from './UserList.module.css'
import Card from '../UI/Card'
const UsersList = ({users}) => {
  return (
    <Card className={classes.users}>
    <ul>
        {users.map((user) => <User key={user.name} name={user.name} age={user.age}/>)}
    </ul>
    </Card>
  )
}

export default UsersList
