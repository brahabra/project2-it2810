import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getData }from './api/fetch'
import { Typography }from '@mui/material'
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
