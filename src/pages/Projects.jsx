import HeroBanner from '../components/HeroBanner'
import ProjectSection from '../components/ProjectSection'

const Projects = () => {
  return (
    <div>
      {/* Hero Image */}
      <HeroBanner 
        image="https://ik.imagekit.io/abnerlighting/banner/1.png" 
        alt="Abner Projects" 
      />

      {/* Title Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="tracking-tight" style={{fontSize: '48px', paddingBottom: '0px'}}>Our Projects</h1>
        </div>
      </section>

      {/* Restaurant Project */}
      <ProjectSection
        number="01"
        title="Restaurants"
        description="The bustling, hip spot for family gatherings and parties requires an absolutely stunning luminance. Abner's expertise in maintaining a minimalist look yet delivering a solid glow is what restaurant installation is all about."
        image="https://ik.imagekit.io/abnerlighting/projects/1.png"
        imageAlt="Restaurant Project"
        imageFirst={true}
      />

      {/* Workspace Project */}
      <ProjectSection
        number="02"
        title="Workspaces"
        description="The human-centric lighting aspect of installation and service is the key thought behind the HDFC Workspace project. To be productive in brightness yet comforting for the folks working, a balance of light and energy is at play."
        image="https://ik.imagekit.io/abnerlighting/projects/2.png"
        imageAlt="Workspace Project"
        imageFirst={false}
      />

      {/* Jewellery Store Project */}
      <ProjectSection
        number="03"
        title="Jewellery Stores"
        description="Precision without spillage and delivering the high street retail light needed. Boutique projects undertaken by Abner are a modern-day luminous art."
        image="https://ik.imagekit.io/abnerlighting/projects/3.png"
        imageAlt="Jewellery Store Project"
        imageFirst={true}
      />
    </div>
  )
}

export default Projects
