import { useState } from 'react';

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
    evemt.preventDefault();
    const newUser = [name, year]
    props.addUser(newUser)
  }
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username'onChange={changeNameHandler}></input>
      <label htmlFor='age'>Age(Years)</label>
      <input id='age' type='number'onChange={changeAgeHandler}></input>
      <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUser
