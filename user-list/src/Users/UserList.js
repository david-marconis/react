import Card from "../UI/Card";

const UserList = props => {
  return (
    <Card>
      {props.users.map(user => (
        <label key={user.id}>
          {user.username} {user.age}
        </label>
      ))}
    </Card>
  );
};

export default UserList;
