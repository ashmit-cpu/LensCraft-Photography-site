import React from 'react'
import '../../Styles/AboutBanner.css'
import { Link } from 'react-router-dom'


function AboutBanner() {
    return (
        <div className='AboutBanner'>
            <div className="container">
                <div className="bg-overlay">

                </div>
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/Lens_craft_logo_2old.png" alt="" />
                    </Link>

                </div>
                <div className="text">
                    <h2>About</h2>
                </div>

            </div>
        </div>
    )
}

export default AboutBanner