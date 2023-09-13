import React from 'react'
import CV from '../../assets/Resume.pdf'

const Script = () => {
  return (
    <div className='script'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk Now!</a>
    </div>
  )
}
export default Script