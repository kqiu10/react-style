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
  const addUserHandler = (nName, nAge) => {
    setUsers((prevUserList) => {
      return [{ name: nName, age: nAge}, ...prevUserList]
    })
  };
  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
