import PricingCTA from "@/components/pricing/pricing-cta"
import PricingGrid from "@/components/pricing/pricing-grid"
import PricingHero from "@/components/pricing/pricing-hero"

function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <PricingCTA/>
    </>
  )
}

export default Pricing