import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ContactBanner from '../Components/ContactBanner/ContactBanner'
import ContactDetails from '../Components/ContactDetails/ContactDetails'
import Map from '../Components/Map/Map'

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactBanner/>
        <ContactDetails/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Contact