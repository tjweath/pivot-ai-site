import React, { useEffect, useState } from "react";
import "../../App/App.css";
import { getUser } from "../../utilities/users-service";

export default function UserProfile({ user, setUser }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser();
      setUserData(userData);
    };

    fetchUserData();
  }, []);
  return (
    <div className="card-text-center">
      <div className="card-header">
      </div>
        <div>
          <h1>Hi {userData?.name}! </h1>
        </div>
      &nbsp; &nbsp;
      <h1>My Saved Jobs</h1>
    </div>
  );
}
