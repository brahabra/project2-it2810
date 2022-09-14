import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData }from './api/fetch'
import { Typography }from '@mui/material'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('17381', 'glpat-CRs4epaLyzKdvdpGzE_3')
    .then((res) => {
      console.log(res); // JSON data parsed by `data.json()` call
      setData(res)
    });
  
  } ,[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.map((item: { id: string, title: string, committer_name: string }) => 
            <Typography key={item.id}>
              Title: {item.title}
              <br/>
              Committer: {item.committer_name}
              <br/>
             </Typography>  
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
