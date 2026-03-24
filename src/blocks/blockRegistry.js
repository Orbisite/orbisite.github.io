import BentoShowcaseBlock from './BentoShowcaseBlock'
import FooterBlock from './FooterBlock'
import FeaturesBlock from './FeaturesBlock'
import HeroBlock from './HeroBlock'
import NavbarBlock from './NavbarBlock'
import PricingBlock from './PricingBlock'
import TestimonialsBlock from './TestimonialsBlock'

const blockRegistry = {
  navbar: NavbarBlock,
  hero: HeroBlock,
  features: FeaturesBlock,
  bento: BentoShowcaseBlock,
  pricing: PricingBlock,
  testimonials: TestimonialsBlock,
  footer: FooterBlock,
}

export default blockRegistry
