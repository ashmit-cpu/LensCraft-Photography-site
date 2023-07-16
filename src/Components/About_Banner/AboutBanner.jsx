import React, { useContext } from 'react'
import '../../Styles/AboutBanner.css'
import { Link } from 'react-router-dom'
import MenuContext from '../../Context/MenuProvider';



function AboutBanner() {
    const { handleOpenMenu } = useContext(MenuContext);

    return (
        <div className='AboutBanner'>
            <div className="container">
                <div id="openMenu" onClick={handleOpenMenu}><i className="fa fa-bars"></i></div>

                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                    <li>
                        <Link to="/about">About</Link>

                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>

                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>

                    </li>
                </ul>
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