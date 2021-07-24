import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import InvalidUser from "./InvalidUser";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState();

  //change name funciton
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  //change age funciton
  const changeAgeHandler = (e) => {
    setYear(e.target.value);
  };

  //addUser function
  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || year.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+year < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    props.addUser(name, year);
    setName('');
    setYear('');
  };

  const errorHandler = () => {
    setError(null);
  }
  return (
    <React.Fragment>
      {error && <InvalidUser title={error.title} message={error.message} errorHandler={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={changeNameHandler}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={year}
          onChange={changeAgeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
      </Card>

      </React.Fragment>
  );
};

export default AddUser;
