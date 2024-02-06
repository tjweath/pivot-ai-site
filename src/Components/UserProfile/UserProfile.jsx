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
        <div>
          <label htmlFor="name" className="profile-list profile-name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label htmlFor="job-title" className="profile-list profile-jobtitle">Job Title</label>
          <input type="text" name="job-title"/>
        </div>
        <div>
          <label htmlFor="c-salary" className="profile-list profile-csalary">Current Salary</label>
          <input type="text" name="c-salary"/>
        </div>
        <div>
          <label htmlFor="d-salary" className="profile-list profile-dsalary">Desired Salary</label>
          <input type="text" name="d-salary"/>
        </div>
        <div>
          <label htmlFor="location" className="profile-list profile-location">Location</label>
          <input type="text" name="location"/>
        </div>
        <div>
          <label htmlFor="relocate" className="profile-list profile-relocate">Open to Relocate</label>
          <input type="text" name="relocate"/>
        </div>
        <div>
          <label htmlFor="tech-stack" className="profile-list profile-techstack">Tech Stack</label>
          <input type="text" name="tech-stack"/>
        </div>
      </div>
      <div>
        <a href="#" className="btn btn-primary">Edit Profile</a>
      </div>
      &nbsp; &nbsp;
      <h1>My Saved Jobs</h1>
    </div>
  );
}
