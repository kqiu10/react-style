import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
function App() {
  const DUMMY_DATA = [
    { name: "Max", age: 31 },
    { name: "greg", age: 22 },
  ];
  const [users, setUsers] = useState(DUMMY_DATA);
  //addUserHandler function
  const addUserHandler = (value) => {
    console.log('111');
    setUsers(value, ...users)
  };
  return (
    <div>
      <AddUser adUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
