import EmailCard from "@/components/emails/email-card"
import { Skeleton } from "@/components/ui/skeleton"
import { sleep } from "@/lib/utils"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "TikTok Email Templates - King Mail"
}

function Category() {
    return (
        <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-semibold text-indigo-600">
                    Email templates
                </span>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    TikTok email templates
                    <span className="block text-gray-400">
                        Ready to make them yours.
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                    Explore email designs made for TikTok creators, brands,
                    launches and campaigns. Pick one, customize it and make
                    it fit your message.
                </p>
            </div>

            <section className="mt-16">
                <Suspense fallback={<GridSkeleton />}>
                    <CategoryGrid />
                </Suspense>
            </section>
        </main>
    )
}

function GridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="space-y-4">
                    <Skeleton className="aspect-4/3 w-full rounded-2xl" />

                    <div className="space-y-2 px-1">
                        <Skeleton className="h-4 w-3/5 rounded-md" />
                        <Skeleton className="h-3 w-4/5 rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    )
}

async function CategoryGrid() {
    await sleep(1500)

    const templates = Array.from({ length: 12 })

    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {templates.map((_, index) => (
                <div key={index} className="group">
                    <EmailCard />
                </div>
            ))}
        </div>
    )
}

export default Category
