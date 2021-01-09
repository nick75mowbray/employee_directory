import React, {useEffect, useState} from 'react';
import Grid from './components/Grid'; 
import Header from './components/Header';
import API from './utils/API';



export default function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(()=>{
    API.getUserData().then(results=>{
      setUsers(results.data.results);
      setFilteredUsers(results.data.results);
    })
  },[]);

 const handleSearchChange = event => {
    console.log(event.target.value);
    setSearch(event.target.value);
    const filteredList = users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });
    setFilteredUsers(filteredList);
  }

  return (
    <div>
      <Header handleSearch={handleSearchChange}/>
      <Grid userData={filteredUsers} name="Nick"/>
    </div>
  );
}
