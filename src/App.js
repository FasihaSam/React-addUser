import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from './Components/Users/UsersList';


function App() {

  const [usersList, setUsersaList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersaList((prevUsers) => {
      return [...prevUsers, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser ={AddUserHandler}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
