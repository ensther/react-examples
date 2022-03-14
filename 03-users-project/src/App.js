import './index.css';

import React, {useState} from 'react';

import AddUser  from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: username, age: age, id: Math.random().toString()}];
    });
  };
    
  return (
    <div>
      <AddUser  addUserHandler={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
