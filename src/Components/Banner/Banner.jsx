import React, { useContext } from 'react'
import '../../Styles/Banner.css'
import { Link } from 'react-router-dom'
import MenuContext from '../../Context/MenuProvider';

function Banner() {
  const { handleOpenMenu } = useContext(MenuContext);

  return (
    <div>
      <div className='banner_img'>
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
        <video autoPlay muted loop playsInline className="bg-img" src="https://player.vimeo.com/external/387169338.sd.mp4?s=59861f43b372ae5fcfb9160c2c53ae7460a1ffcf&profile_id=164&oauth2_token_id=57447761" alt="" />
        <video autoPlay muted loop playsInline className="bg-mob-img" src="https://player.vimeo.com/external/387169338.sd.mp4?s=59861f43b372ae5fcfb9160c2c53ae7460a1ffcf&profile_id=164&oauth2_token_id=57447761" alt="" />

        <img className="logo" src="assets\img\Lens_craft_logo.png" alt="" />
      </div>
    </div>
  )
}

export default Banner