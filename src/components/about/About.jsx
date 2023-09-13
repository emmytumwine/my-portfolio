import React from "react";
import './about.css'
import my from '../../assets/github.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {my} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>workmates</h5>
              <small>30+ workmates</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, inventore laborum? Facilis voluptatibus minus impedit quam vel. Enim dolorem inventore neque voluptatibus accusamus illo ratione sapiente minima, voluptatum expedita. Vel?</p>
          <a href="#contact" className="btn btn-primary">Let's Talk Now!</a>
        </div>
      </div>
    </section>
  );
}

export default About