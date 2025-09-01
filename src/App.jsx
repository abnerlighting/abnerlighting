import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ConcreteSeries from './pages/ConcreteSeries'
import StoneSeries from './pages/StoneSeries'
import ArchitecturalSeries from './pages/ArchitecturalSeries'
import Play50 from './pages/Play50'
import Play70 from './pages/Play70'
import PlayMe from './pages/PlayMe'
import MiniPlaySeries from './pages/MiniPlaySeries'
import PlaySeries from './pages/PlaySeries'
import SurfyKone from './pages/SurfyKone'
import WallLights from './pages/WallLights'
import FloorLights from './pages/FloorLights'
import PathLights from './pages/PathLights'
import StepLights from './pages/StepLights'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import ProductDetail from './pages/ProductDetail'
import ConcreteSeriesBlog from './pages/ConcreteSeriesBlog'
import ProjectBlog from './pages/ProjectBlog'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concrete-series" element={<ConcreteSeries />} />
          <Route path="/concrete-series/wall-lights" element={<WallLights />} />
          <Route path="/concrete-series/wall-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/floor-lights" element={<FloorLights />} />
          <Route path="/concrete-series/floor-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/path-lights" element={<PathLights />} />
          <Route path="/concrete-series/path-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/step-lights" element={<StepLights />} />
          <Route path="/concrete-series/step-lights/:id" element={<ProductDetail />} />
          <Route path="/stone-series" element={<StoneSeries />} />
          <Route path="/architectural-series" element={<ArchitecturalSeries />} />
          <Route path="/architectural-series/play-50" element={<Play50 />} />
          <Route path="/architectural-series/play-70" element={<Play70 />} />
          <Route path="/architectural-series/play-me" element={<PlayMe />} />
          <Route path="/architectural-series/mini-play-series" element={<MiniPlaySeries />} />
          <Route path="/architectural-series/play-series" element={<PlaySeries />} />
          <Route path="/architectural-series/surfy-kone" element={<SurfyKone />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/concrete-series-blog.html" element={<ConcreteSeriesBlog />} />
          <Route path="/projects/:slug" element={<ProjectBlog />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
