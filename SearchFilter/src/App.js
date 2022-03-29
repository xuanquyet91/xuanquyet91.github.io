import React,{useState} from "react";
import style from "./css/main.css";
import {Users} from "./api/users"
import Table from "./api/table";

function App() {
  const [query, setQuery]= useState('');
  const keys = ['first_name','last_name','email']

  const search = (data) => {
    return data.filter(item=>
      keys.some((key)=> 
        item[key].toLowerCase().includes(query)
      )
      );
  }

  return (
    <div className="App">
      <input type='text' 
      onChange= {e=> setQuery(e.target.value)}
      placeholder="Search...">
      </input>
        <Table 
        data={search(Users)}
        />
    </div>
  );
}

export default App;
