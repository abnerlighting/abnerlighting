import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ConcreteSeries from './pages/ConcreteSeries'
import StoneSeries from './pages/StoneSeries'
import ArchitecturalSeries from './pages/ArchitecturalSeries'
import WallLights from './pages/WallLights'
import Play50 from './pages/Play50'
import Play70 from './pages/Play70'
import PlayMe from './pages/PlayMe'
import MiniPlaySeries from './pages/MiniPlaySeries'
import PlaySeries from './pages/PlaySeries'
import SurfyKone from './pages/SurfyKone'
import FloorLights from './pages/FloorLights'
import PathLights from './pages/PathLights'
import StepLights from './pages/StepLights'
import ProductDetail from './pages/ProductDetail'
import Projects from './pages/Projects'
import ProjectBlog from './pages/ProjectBlog'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import ConcreteSeriesBlog from './pages/ConcreteSeriesBlog'
import MapleFamily from './pages/MapleFamily'
import PandavFamily from './pages/PandavFamily'
import PearlFamily from './pages/PearlFamily'
import PendantLight from './pages/PendantLight'
import Suspension from './pages/Suspension'
import TableLamp from './pages/TableLamp'
import Chandelier from './pages/Chandelier'
import FloorLamp from './pages/FloorLamp'
import WallLamp from './pages/WallLamp'
import WallLight from './pages/WallLight'
import CeilingMount from './pages/CeilingMount'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concrete-series" element={<ConcreteSeries />} />
          <Route path="/concrete-series/wall-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/floor-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/path-lights/:id" element={<ProductDetail />} />
          <Route path="/concrete-series/step-lights/:id" element={<ProductDetail />} />
          <Route path="/stone-series" element={<StoneSeries />} />
          <Route path="/stone-series/maple-family" element={<MapleFamily />} />
          <Route path="/stone-series/pandav-family" element={<PandavFamily />} />
          <Route path="/stone-series/pearl-family" element={<PearlFamily />} />
          <Route path="/stone-series/pendant-light" element={<PendantLight />} />
          <Route path="/stone-series/suspension" element={<Suspension />} />
          <Route path="/stone-series/table-lamp" element={<TableLamp />} />
          <Route path="/stone-series/chandelier" element={<Chandelier />} />
          <Route path="/stone-series/floor-lamp" element={<FloorLamp />} />
          <Route path="/stone-series/wall-lamp" element={<WallLamp />} />
          <Route path="/stone-series/wall-light" element={<WallLight />} />
          <Route path="/stone-series/ceiling-mount" element={<CeilingMount />} />
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectBlog />} />
          <Route path="/concrete-series-blog" element={<ConcreteSeriesBlog />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
