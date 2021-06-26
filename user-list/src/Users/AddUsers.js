import { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUsers.module.css";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = event => {
    event.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid unput",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid unput",
        message: "Please enter an age >= 0.",
      });
      return;
    }
    props.onAddUser({
      id: Math.random(),
      username: username,
      age: age,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorOkHandler = () => {
    setError();
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorOkHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label>Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={addUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
