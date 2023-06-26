import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Pt_Banner from '../Components/PortraitBanner/Pt_Banner'
import Review from '../Components/Reviews/Review'
import WedBanner from '../Components/WedBanner/WedBanner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Pt_Banner/>
      <Review/>
      <WedBanner/>
      


    </div>
  )
}

export default Home

