import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="http://linked.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
    <a href="http://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}
export default HeaderSocials