import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ConcreteSeries from './pages/ConcreteSeries'
import StoneSeries from './pages/StoneSeries'
import ArchitecturalSeries from './pages/ArchitecturalSeries'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concrete-series" element={<ConcreteSeries />} />
          <Route path="/stone-series" element={<StoneSeries />} />
          <Route path="/architectural-series" element={<ArchitecturalSeries />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
