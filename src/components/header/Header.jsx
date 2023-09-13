import React from "react";
import './header.css'
import Script from './Script'
import my from '../../assets/my-image.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Emmy Tumwine</h2>
        <h5 className="text-light">Here Is My Portfolio!</h5>
        <Script/>
        <HeaderSocials/>
        <div className="my">
          <img src={my} alt="my" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header