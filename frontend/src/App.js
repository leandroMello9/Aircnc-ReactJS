import React, { useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import api from './services/api';
import Routes from './routes';

function App () {
 

  return (
    <div className="container">
      <img src={Logo} alt="Logo"/>

      <div className="content">
       <Routes/>
       
      </div>
    </div>
  );
}


export default App;