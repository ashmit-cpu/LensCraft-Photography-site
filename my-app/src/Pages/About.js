import React from 'react'
import AboutBanner from '../Components/About_Banner/AboutBanner'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AboutDesc from '../Components/About_Desc/AboutDesc'
import PromoVideo from '../Components/PromoVideo/PromoVideo'

function About() {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <AboutDesc/>
      <PromoVideo/>
      <Footer/>
    </div>
  )
}

export default About