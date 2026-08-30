import SignupForm from "@/components/auth/signup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create Account - King Mail"
}

function Signup() {
    return (
        <div className="flex h-screen w-full">
            <SignupForm />
        </div>
    )
}

export default Signup