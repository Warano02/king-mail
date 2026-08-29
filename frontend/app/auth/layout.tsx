import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Authentification - King Mail"
}
function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}

export default layout