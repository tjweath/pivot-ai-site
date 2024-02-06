import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm from "../../Components/SignUpForm/SignUpForm"

export default function LoginPage({ setUser }) {
  return (
    <main>
    <SignUpForm setUser={ setUser }/>
    <LoginForm setUser={ setUser }/>
    </main>
  )
}
