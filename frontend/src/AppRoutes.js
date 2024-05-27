import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import './index.css'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import Solutions from 'pages/Solutions'
import ScrollToTop from 'components/ScrollToTop'
import AboutUs from 'pages/AboutUs'
import Contact from 'pages/Contact'

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
