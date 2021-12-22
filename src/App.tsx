import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    </Routes>
  </Router>
  );
}

export default App;
