import FeaturesAI from '@/components/features/feature-ai'
import FeaturesCreate from '@/components/features/feature-create'
import FeaturesHero from '@/components/features/feature-hero'
import FeaturesPreview from '@/components/features/feature-preview'
import FeaturesCTA from '@/components/features/final-cta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Features - King Mail"
}

function features() {
  return (
    <>
      <FeaturesHero />
      <FeaturesCreate />
      <FeaturesAI />
      <FeaturesPreview/>
      <FeaturesCTA/>
    </>
  )
}

export default features