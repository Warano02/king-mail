"use client"

import { Skeleton } from "../ui/skeleton"

function CategorySkeleton() {
    return (
        <section className="space-y-6">
            {
                Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx}>
                        <div className="flex items-end justify-between gap-4">
                            <div className="space-y-2">
                                <Skeleton className="h-7 w-40 rounded-lg" />
                                <Skeleton className="h-4 w-64 rounded-md" />
                            </div>

                            <Skeleton className="h-5 w-16 rounded-md" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex w-full gap-5 overflow-hidden pb-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-70 shrink-0 space-y-3 sm:w-[320px]"
                                    >
                                        <Skeleton className="aspect-4/3 w-full rounded-2xl" />

                                        <div className="space-y-2 px-1">
                                            <Skeleton className="h-4 w-3/5 rounded-md" />
                                            <Skeleton className="h-3 w-4/5 rounded-md" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <Skeleton className="size-9 rounded-full" />
                                <Skeleton className="size-9 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default CategorySkeleton
