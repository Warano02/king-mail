import LoginForm from "@/components/auth/login-form"
import { Metadata } from "next"

export const metadata:Metadata={
  title:"Login - King Mail",
  description:"Login"
}
function Login() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-full hidden md:inline-block">
        <img className="h-full" src="/leftSideImage.png" alt="leftSideImage" />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login