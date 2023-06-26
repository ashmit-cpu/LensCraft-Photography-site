import React from 'react'
import '../../Styles/Navbar.css'
import { useState } from 'react'


function Navbar() {

    const [navbar, setnavbar] = useState(false);


    const handleNavbar = () => {
        if (window.scrollY > 360) {
            setnavbar(true)
        } else {
            setnavbar(false)
        }
    }
    window.addEventListener('scroll', handleNavbar)


    // togglebar function

   const [menuOpen,setMenuOpen] =useState(false);

   const handleOpenMenu = () =>{
    setMenuOpen(true);
   }

   const handleCloseMenu = () =>{
    setMenuOpen(false);
   }
  

    return (
        <div>
            <div className={navbar ? 'Navbar active' : 'Navbar'}>
                <div className="logo">
                    <img src="assets/img/logo-black.png" alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <hr />

                    </li>
                    <li>
                        <a href="#">About</a>
                        <hr />

                    </li>
                    <li>
                        <a href="#">Gallery</a>
                        <hr />

                    </li>
                    <li>
                        <a href="#">Contact</a>
                        <hr />

                    </li>
                </ul>
                <div id="openMenu" onClick={handleOpenMenu}><i className="fa fa-bars"></i></div>

            </div>
            <div className={menuOpen?'Navbar-mob active':'Navbar-mob'}>
                <div id="closeMenu" onClick={handleCloseMenu}><i className="fa-solid fa-xmark"></i></div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>


            </div>
        </div>

    )
}

export default Navbar