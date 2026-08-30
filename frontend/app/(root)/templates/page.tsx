import { Metadata } from "next"

import Category from "@/components/template/category"
import { sleep } from "@/lib/utils"
import { Suspense } from "react"
import CategorySkeleton from "@/components/template/category-skeleton"
import HowItWorks from "@/components/template/how-it-work"
import TemplatesCTA from "@/components/template/template-cta"

export const metadata: Metadata = {
  title: "Email Templates - King Mail",
  description:
    "Start creating faster with ready-to-use email templates designed for real campaigns, businesses, and everyday communication."
}

function Templates() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold text-indigo-600">
          Email templates
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Start with something that already works.
          <span className="block text-gray-400">
            Then make it yours.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
          Browse ready-to-use email designs for launches, newsletters,
          promotions, events, and more. Pick a template, customize it
          in the editor, and send it when you're ready.
        </p>
      </div>

      <Suspense fallback={<CategorySkeleton />}>
        <CategoryTemplates />
      </Suspense>
      <HowItWorks />
      <TemplatesCTA />
    </main>
  )
}

const CategoryTemplates = async () => {
  await sleep(5000)
  return <div className="mt-20 space-y-14">
    <Category
      title="TikTok Mail"
      slug="tiktok-mail"
    />

    <Category
      title="Product Launch"
      slug="product-launch"
    />

    <Category
      title="Newsletters"
      slug="newsletters"
    />

    <Category
      title="Promotions"
      slug="promotions"
    />

    <Category
      title="Welcome Emails"
      slug="welcome-emails"
    />
  </div>
}

export default Templates
