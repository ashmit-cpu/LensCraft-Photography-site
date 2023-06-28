import React from 'react'
import '../../Styles/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function AbtNavbar() {




    // togglebar function

    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuOpen(true);
    }

    const handleCloseMenu = () => {
        setMenuOpen(false);
    }


    return (
        <div>
            <div className='Navbar active'>
                <div className="logo">
                    <Link to="/">
                        <img src="assets/img/logo-black.png" alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <hr />

                    </li>
                    <li>
                        <Link to="/about">About</Link>
                        <hr />

                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                        <hr />

                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <hr />

                    </li>
                </ul>
                <div id="openMenu" onClick={handleOpenMenu}><i className="fa fa-bars"></i></div>

            </div>
            <div className={menuOpen ? 'Navbar-mob active' : 'Navbar-mob'}>
                <div className="menu-content">
                    <div id="closeMenu" onClick={handleCloseMenu}><i className="fa-solid fa-xmark"></i></div>
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
                </div>


            </div>
        </div>

    )
}

export default AbtNavbar