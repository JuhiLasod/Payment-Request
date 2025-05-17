// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
// import { Route } from 'react-router-dom';
import Userdash from './components/Userdash';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userdash/>}/>
    </Routes>
  );
}

export default App;
