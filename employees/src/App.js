import React, {useEffect, useState} from 'react';
import Grid from './components/Grid'; 
import Header from './components/Header';
import API from './utils/API';



export default function App() {

  const [users, setUsers] = useState([]);
  
  const [filteredUsers, setFilteredUsers] = useState([]);

  // get employee data when page loads
  useEffect(()=>{
    API.getUserData().then(results=>{
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
    })
  },[]);

 const handleSearchChange = event => {
    
  // set search state
    const search = event.target.value;

    // filter employees
    const filteredList = users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });

    // set state of filtered employees
    setFilteredUsers(filteredList);

  }

  return (
    <div>
      <Header handleSearch={handleSearchChange}/>
      <Grid userData={filteredUsers} name="Nick"/>
    </div>
  );
}
