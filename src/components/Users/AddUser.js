import { useState } from 'react';
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
const AddUser = (props) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');


  //change name funciton
  const changeNameHandler = (e) => {
    setName(e.target.value)
  }

   //change age funciton
   const changeAgeHandler = (e) => {
    setYear(e.target.value)
  }

  //addUser function
  const addUserHandler = (event) => {
    event.preventDefault();
    const newUser = [name, year]
    props.addUser(newUser)
  }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username'onChange={changeNameHandler}></input>
      <label htmlFor='age'>Age(Years)</label>
      <input id='age' type='number'onChange={changeAgeHandler}></input>
      <Button type='submit'>Add User</Button>
      </form>
      </Card>
  )
}

export default AddUser
