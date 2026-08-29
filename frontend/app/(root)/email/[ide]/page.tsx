import EditStudio from "@/components/emails/edit-studio"
import EmailCard from "@/components/emails/email-card"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Personalize Email - King Email"
}
function SingleEmailPersonalisation() {
  return (
    <main className="max-w-7xl mx-auto px-2">
      <EditStudio />

      <Suspense fallback={<PropositionSkeleton />}>
        <Proposition />
      </Suspense>
    </main>
  )
}

const PropositionSkeleton = () => {
  return <section className="flex  gap-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 relative flex-1 h-auto">
      {
        Array.from({ length: 12 }).map((_, idx) => <div key={idx} className="w-full h-98 bg-[#d6d3d3] animate-pulse rounded-xl" />)
      }
    </div>
    <div className="hidden md:block w-60 p-2 space-y-2">
      {
        Array.from({ length: 3 }).map((_, idx) => <div key={idx} className="w-full h-110 bg-[#d6d3d3] animate-pulse rounded-xl" />)
      }
    </div>
  </section>
}

async function Proposition() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return <section className="space-y-6">
    <h1 className="text-xl sm:text-2xl">You might also like</h1>
    <div className="flex gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 relative flex-1 h-auto">
        {
          Array.from({ length: 12 }).map((_, idx) => <EmailCard key={idx} />)
        }
      </div>
      <div className="hidden md:block w-60 p-2 space-y-2">
        {
          Array.from({ length: 3 }).map((_, idx) => <EmailCard key={idx} className="h-110" />)
        }
      </div>
    </div>
  </section>
}
export default SingleEmailPersonalisation