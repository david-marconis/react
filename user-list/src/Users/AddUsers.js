import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = props => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const addUserHandler = event => {
    event.preventDefault();
    if (age < 0) {
      console.log("invalid age");
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
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label>Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit" onClick={addUserHandler}>
          Add user
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
