import UserProfile from "../../Components/UserProfile/UserProfile"
import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"
import { useState } from "react"
import { getUser } from "../../utilities/users-service"


export default function ProfilePage() {
// const [showForms, setShowForms] = useState(null)
const [user, setUser] = useState(getUser());

  return (
    <main>
      {user ? (
        // User is logged in, show UserProfile
        <UserProfile setUser={setUser}/>
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
