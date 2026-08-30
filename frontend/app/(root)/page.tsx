import Donate from "@/components/Donate"
import FinalCta from "@/components/home/final-cta"
import Hero from "@/components/home/hero"
import HowItWorks from "@/components/home/how-it-work"
import Newsletter from "@/components/home/newsletter"
import ResponsiveEmails from "@/components/home/responsive-email"
import SocialProof from "@/components/home/social-proof"
import Story from "@/components/home/story"
import Template from "@/components/home/template"
import YourWorkspaceWay from "@/components/home/your-workspace-way"

function page() {
  return (
    <>
      <Donate />
      <Hero />
      <Story />
      <YourWorkspaceWay />
      <Template />
      <HowItWorks />
      <ResponsiveEmails/>
      <SocialProof/>
      <FinalCta/>
      <Newsletter />
    </>
  )
}

export default page