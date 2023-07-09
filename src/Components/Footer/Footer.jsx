import React from 'react'
import '../../Styles/Footer.css'
function Footer() {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="logo">
                    <img src="assets/img/Lens_craft_logo_2old.png" alt="" />
                </div>
                <div className="links">
                    <div className="section">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                                <hr />
                            </li>
                            <li>
                                <a href="#/">Book Now</a>
                                <hr />

                            </li>
                            <li>
                                <a href="about">About</a>
                                <hr />

                            </li>
                            <li>
                                <a href="gallery">Gallery</a>
                                <hr />

                            </li>
                            <li>
                                <a href="#/">Services</a>
                                <hr />

                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <ul>
                            <li>
                                <a href="#/">Testimonials</a>
                                <hr />

                            </li>
                            <li>
                                <a href="#/">Blog</a>
                                <hr />

                            </li>
                            <li>
                                <a href="#/">Pricing</a>
                                <hr />
/
                            </li>
                            <li>
                                <a href="#/">FAQs</a>
                                <hr />

                            </li>
                            <li>
                                <a href="#/">Contact</a>
                                <hr />

                            </li>
                        </ul>
                    </div>

                </div>
                <div className="address">
                    <div className="details">
                        <p>Krishnalayam</p>
                        <p>Thalassery,kerala</p>
                        <p>10-012</p>
                        <a href="mailto: ashmithkacheri138@gmail.com">ashmithkacheri138@gmail.com</a>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100008369855021" target="_blank"rel="noopener noreferrer"><span class="social-media"><i
                            class="fa-brands fa-facebook"></i></span></a>
                        <a href="https://instagram.com/ashmithkacheri?igshid=ZDdkNTZiNTM=" target="_blank"rel="noopener noreferrer"><span class="social-media"><i
                            class="fa-brands fa-instagram"></i></span></a>
                        <a href="https://github.com/ashmit-cpu"><span class="social-media" target="_blank"rel="noopener noreferrer"><i
                            class="fa-brands fa-github"></i></span></a>
                        <a href="https://www.linkedin.com/in/ashmit-kacheri-492310264/" target="_blank"rel="noopener noreferrer"><span class="social-media"><i
                            class="fa-brands fa-linkedin"></i></span></a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer