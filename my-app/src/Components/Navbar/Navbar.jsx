import React from 'react'
import '../../Styles/Navbar.css'
import { useState,useEffect } from 'react'


function Navbar() {

    const [navbar, setnavbar]= useState(false);


    const handleNavbar = () =>{
        if(window.scrollY >460){
            setnavbar(true)
        }else{
            setnavbar(false)
        }
    }
    window.addEventListener('scroll',handleNavbar)
  return (
    <div className={navbar? 'Navbar active':'Navbar'}>
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
  )
}

export default Navbar