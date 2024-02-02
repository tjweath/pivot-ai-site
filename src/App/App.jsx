import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
}

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
