import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobListPage from '../Pages/JobListPage/JobListPage';

function Home() {
}

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        < JobListPage />
    </div>
  );
}

export default App;
