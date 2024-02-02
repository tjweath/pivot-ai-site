import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
