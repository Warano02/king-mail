import { Skeleton } from "@/components/ui/skeleton"
import { sleep } from "@/lib/utils"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata:Metadata={
    title:"Template Category - King Mail"
}

function Category() {
    return (
        <div className="mx-auto max-w-7xl mt-16">
            <div className="mx-auto max-w-3xl text-center">

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                    Tiktok Email
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

            <section className="mx-auto max-w-7xl px-12">
                <Suspense fallback={<GridColSkelleton />}>
                    <CategoryGrid />
                </Suspense>
            </section>
        </div>
    )
}

const GridColSkelleton = () => (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 relative flex-1 h-auto">
    {
        Array.from({ length: 18 }).map((_, idx) => <Skeleton key={idx} className="w-full h-98  rounded-xl" />)
    }
</div>)

const CategoryGrid = async () => {
    await sleep(9000)
    return <div>

    </div>

}

export default Category