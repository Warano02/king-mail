import SignupForm from "@/components/auth/signup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create Account - King Mail"
}

function Signup() {
    return (
        <div className="flex h-screen w-full">
            <SignupForm />
            <div className="w-full hidden md:inline-block">
                <img className="h-full" src="/leftSideImage.png" alt="leftSideImage" />
            </div>
        </div>
    )
}

export default Signup