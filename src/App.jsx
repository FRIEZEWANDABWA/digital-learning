import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import PartneredCenters from './pages/PartneredCenters'
import PartnershipApplication from './pages/PartnershipApplication'
import HubDashboard from './pages/HubDashboard'
import Designs from './pages/Designs'
import Curriculum from './pages/Curriculum'
import Stories from './pages/Stories'
import DataForAfrica from './pages/DataForAfrica'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryId" element={<CountryDetail />} />
            <Route path="/partnered-centers" element={<PartneredCenters />} />
            <Route path="/partnership-application" element={<PartnershipApplication />} />
            <Route path="/hub-dashboard" element={<HubDashboard />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/data-for-africa" element={<DataForAfrica />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App