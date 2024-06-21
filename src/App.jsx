import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import LandingPage from './landingPage/LandingPage'
import About from './about/About'
import GetInvolve from './getInvolve/GetInvolve'
import Blog from './blog/Blog'
import Gallery from './gallery/Gallery'
import Donate from './donate/Donate'
import Contact from './contact/Contact'
import Resources from './resources/Resources'
import GeneralInfo from './about/general_info/GeneralInfo'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='about' element={<About />} />
            <Route path='get_involve' element={<GetInvolve />} />
            <Route path='blog' element={<Blog />} />
            <Route path='resources' element={<Resources />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='donate' element={<Donate />} />
            <Route path='contact_us' element={<Contact />} />
            <Route path='about_general_info' element={<GeneralInfo />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
