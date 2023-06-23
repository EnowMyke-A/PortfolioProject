import React from 'react'
import './about.css'
import moi from '../../assets/About_Pic.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container" data-aos="zoom-in" data-aos-duration="1500">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Brown " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card" data-aos="fade-left" data-aos-duration="1500">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card" data-aos="fade-left" data-aos-duration="1500">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world wide</small>
              </article>
              <article className="about__card" data-aos="fade-left" data-aos-duration="1500">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5 Completed</small>
              </article>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
              Hello world!! Sure I'm Enow Myke-Austine a Computer Engineering student 
              under the Faculty of Engineering and Technology (FET) at the University of Buea.
              I am also a tech enthusiat, a desktop application developer as well as a web developer.
              Currently a poineer founder at DevLab and working with the DevLab consultant team.
            </p>
            <a href="#contact" className="btn btn-primary" data-aos="zoom-in" data-aos-duration="1000">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
