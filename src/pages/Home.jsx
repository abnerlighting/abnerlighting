import HeroCarousel from '../components/HeroCarousel'
import AboutSection from '../components/AboutSection'
import CustomTextSection from '../components/CustomTextSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import ExploreCollectionSection from '../components/ExploreCollectionSection'
import AbnerNumbersSection from '../components/AbnerNumbersSection'
import PartnersSection from '../components/PartnersSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUsSection />
      <ExploreCollectionSection />
      <AbnerNumbersSection />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home
