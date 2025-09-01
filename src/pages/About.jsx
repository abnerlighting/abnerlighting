import HeroBanner from '../components/HeroBanner'
import ContentSection from '../components/ContentSection'
import GlobalVisionSection from '../components/GlobalVisionSection'
import TimelineSection from '../components/TimelineSection'
import FoundersDeskSection from '../components/FoundersDeskSection'
import TeamGridSection from '../components/TeamGridSection'

const About = () => {
  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
        alt="About Abner Lighting" 
      />

      {/* About Us Section */}
      <ContentSection
        title="About Us"
        image="https://ik.imagekit.io/abnerlighting/branding/worli-showroom-1.jpg"
        imageAlt="About image"
        imageOrder="right"
      >
        <p>Founded in 2015, Lightworx—the force behind the Abner brand—specializes in high-impact, precision-engineered lighting solutions. We blend cutting-edge technology with timeless aesthetics to illuminate spaces with intention and artistry.</p>
        <p>At Abner, we believe lighting is more than function—it's emotion, mood, and experience. Every project we touch reflects our commitment to service, craftsmanship, and performance. From retail showrooms to luxury residences, we design lighting that transforms architecture into atmosphere.</p>
        <p>Join us in redefining the future of lighting—where every beam is deliberate, and every detail matters.</p>
      </ContentSection>

      {/* Global Vision Section */}
      <GlobalVisionSection />

      {/* Second About Section - Mission & Vision */}
      <ContentSection
        title="Our Mission"
        image="https://ik.imagekit.io/abnerlighting/branding/our-mission.jpg"
        imageAlt="About image"
        imageOrder="right"
      >
        <p className="mb-4">To deliver performance-driven, beautiful lighting tailored to Indian lifestyles and climates.</p>
        <div>
          <h3 className="text-center lg:text-left font-bold text-4xl text-slate-900 mb-2">Our Vision</h3>
          <p>To be India's most trusted architectural lighting brand—blending European design with Indian expertise to elevate everyday spaces.</p>
        </div>
      </ContentSection>

      {/* Founder's Desk Section */}
      <FoundersDeskSection />

      {/* Chronoscope Timeline Section */}
      <TimelineSection />

      {/* Company Infrastructure Section */}
      <TeamGridSection />
    </div>
  )
}

export default About
