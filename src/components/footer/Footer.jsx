import React from "react"
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo"> EMMY</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://Facebook.com" target="_blank" rel="noreferrer"><BiLogoFacebook/></a>
        <a href="https://x.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/emmy-tumwine-348717246/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Emmy's Portfolio. All rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer