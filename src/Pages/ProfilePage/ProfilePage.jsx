import UserProfile from "../../Components/UserProfile/UserProfile"
import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"
import { useState } from "react"


export default function ProfilePage() {
// const [showForms, setShowForms] = useState(null)
const [user, setUser] = useState(null);

  return (
    <main>
      {user ? (
        // User is logged in, show UserProfile
        <UserProfile />
      ) : (
        // User is not logged in, show SignUpForm and LoginForm
        <div>
          <SignUpForm setUser={setUser} />
          <LoginForm setUser={setUser} />
        </div>
      )}
    </main>
  );
}
