import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

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
      return;
    }
    if (+year < 1) {
      return;
    }
    const newUser = [name, year];
    props.addUser(newUser);
    setName('');
    setYear('');
  };
  return (
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
  );
};

export default AddUser;
