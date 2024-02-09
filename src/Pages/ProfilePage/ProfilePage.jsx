import UserProfile from "../../Components/UserProfile/UserProfile"
import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"
import { useState } from "react"
import { getUser } from "../../utilities/users-service"


export default function ProfilePage() {
const [user, setUser] = useState(getUser());
const [showLoginForm, setShowLoginForm] = useState(false);

const toggleForm = () => {
  setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
};

const handleLogout = () => {
  localStorage.removeItem('token');
  setUser(null);
};

return (
  <main>
    {user ? (
      <div>
        <UserProfile setUser={setUser}/>
        <button type="submit" className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div>
        {showLoginForm ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
        <button type="submit" className="btn btn-primary" onClick={toggleForm}>
          {showLoginForm ? "Have an Account? Login Instead" : "No Account? Sign Up Here" }
        </button>
      </div>
    )}
  </main>
);
}