import { useState } from "react";

import AddUser from "./Users/AddUsers";
import UserList from "./Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
}

export default App;
