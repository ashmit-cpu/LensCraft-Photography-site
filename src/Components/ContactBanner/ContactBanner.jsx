import React from 'react'
import '../../Styles/ContactBanner.css'
import { Link } from 'react-router-dom'


function ContactBanner() {
    return (
        <div className='ContactBanner'>
            <div className="container">
                <div className="bg-overlay">

                </div>
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/Lens_craft_logo_2old.png" alt="" />
                    </Link>

                </div>
                <div className="text">
                    <h2>Contact Us</h2>
                </div>

            </div>

        </div>
    )
}

export default ContactBanner