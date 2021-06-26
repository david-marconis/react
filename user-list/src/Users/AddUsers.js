import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUsers.module.css";

const AddUser = props => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = event => {
    event.preventDefault();
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
        message: "Please enter a age >= 0.",
      });
      return;
    }
    props.onAddUser({
      id: Math.random(),
      username: username,
      age: age,
    });
    setUsername("");
    setAge("");
  };
  const ageChangeHandler = event => {
    setAge(event.target.value);
  };
  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };
  const errorOkHandler = event => {
    setError();
  };
  return (
    <div>
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
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit" onClick={addUserHandler}>
            Add user
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
