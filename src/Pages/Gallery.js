import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import PhotoGallery from '../Components/PhotoGallery/PhotoGallery'
import GalleryBanner from '../Components/GalleryBanner/GalleryBanner'

function Gallery() {
  return (
    <div>
        <Navbar/>
        <GalleryBanner/>
        <PhotoGallery/>
        <Footer/>
    </div>
  )
}

export default Gallery