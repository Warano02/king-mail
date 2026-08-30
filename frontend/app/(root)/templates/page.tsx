import EmailCard from "@/components/emails/email-card"
import Category from "@/components/template/category"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Emails Template - King Mail"
}

function Templates() {
  return (
    <div className="mx-auto max-w-7xl mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold text-indigo-600">
          Built for real work
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Less time fighting the editor.
          <span className="block text-gray-400">
            More time creating something people care about.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
          Email creation should not feel like a technical project.
          We are building a simpler way to turn ideas into emails
          that are worth opening.
        </p>
      </div>

      <Category />

    </div>
  )
}

export default Templates