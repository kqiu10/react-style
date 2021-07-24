import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./InvalidUser.module.css";
const InvalidUser = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.errorHandler}>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.errorHandler}>Okay</Button>
      </footer>
      </Card>
      </div>
  );
};

export default InvalidUser;
