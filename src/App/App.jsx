import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobListPage from '../Pages/JobListPage/JobListPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import JobDetailPage from '../Pages/JobDetailPage/JobDetailPage';
import Tips from '../Pages/TipsPage/Tips';
import AboutUs from '../Pages/AbousUsPage/AboutUsPage';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/" element={<JobListPage />} />
        <Route path='/job/:id' Component={JobDetailPage}/>
        <Route path='/about-us' element={< AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
