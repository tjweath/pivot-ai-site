import React from 'react';
import * as userService from '../../utilities/users-service';

export default function UserProfile({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div>
      <span>Welcome, {user && user.name}</span>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}
