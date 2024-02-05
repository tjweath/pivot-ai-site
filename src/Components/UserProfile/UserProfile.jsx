import React from 'react';
import '../../App/App.css';
import * as userService from '../../utilities/users-service';


export default function UserProfile({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="card-text-center">
      <div className="card-header">
        <img src="cat.png" className="rounded-circle" style={{ width: '150px', height: '150px' }} />
      </div>
      <div className="profile-body">
        <ul className="profile-list profile-name">Name</ul>
        <ul className="profile-list profile-jobtitle">Job Title:</ul>
        <ul className="profile-list profile-csalary">Current Salary:</ul>
        <ul className="profile-list profile-dsalary">Desired Salary:</ul>
        <ul className="profile-list profile-location">Location:</ul>
        <ul className="profile-list profile-reloctae">Open to Relocate:</ul>
        <ul className="profile-list profile-techstack">Tech Stack:</ul>
      </div>
      <div>
        <a href="#" className="btn btn-primary">Edit Profile</a>
      </div>
      &nbsp; &nbsp;
      <h1>My Saved Jobs</h1>
    </div>
  );
}

