import AboutCTA from '@/components/about/about-cta'
import AboutDelivery from '@/components/about/about-delivery'
import AboutHero from '@/components/about/about-hero'
import AboutProblem from '@/components/about/about-problem'
import AboutSolution from '@/components/about/about-solution'
import AboutVision from '@/components/about/about-vision'

function About() {
  return (
    <>
      <AboutHero />
      <AboutProblem />
      <AboutSolution />
      <AboutDelivery/>
      <AboutVision/>
      <AboutCTA/>
    </>
  )
}

export default About