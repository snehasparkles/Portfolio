import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo2.png';
import banner from './images/file2 - Copy.png';
import about from './images/file.png';
import icon1 from "./images/a1.png"
import axios from "axios";
import icon2 from "./images/a2.png"
import icon3 from "./images/a3.png"
import html from "./images/html.jpg"
import css from "./images/css.jpg"
import js from "./images/js.jpg"
import php from "./images/php.png"
import react from "./images/react.jpg"
import bs from "./images/bs.jpg"
import flask from "./images/flask.jpg"
import node from "./images/nodejs.jpg"
import aari from "./images/aari.png"
import express from "./images/ex.png"
import mysql from "./images/mysql.jpg"
import mongodb from "./images/mongodb.jpg"
import python from "./images/py.jpg"
import java from "./images/java.jpg"
import figma from "./images/figma.jpg"
import navframework from "./images/navframework.png"
import canva from "./images/canva.jpg"
import vs from "./images/vs.jpg"
import jupiter from "./images/jupiter.jpg"
import github from "./images/github.jpg"
import postman from "./images/postman.jpg"
import interestimg from "./images/file3.png"
import email from "./images/email.jpg"
import flaskblog from "./images/flaskblog.png"
import aircons from "./images/aircons.png"
import smltool from "./images/smltool.png"
import reactjs from "./images/react.png"
import pythonsc from "./images/python.png"
import ml from "./images/ml.png"
import * as XLSX from "xlsx";
import Form from './Form';



function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.download = 'M Sneha.pdf';
    link.href = 'https://drive.google.com/file/d/1R-e7XrIbLt7SOXtwxthpLIPw9wD6PuH8/view?usp=sharing';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home" id="logo">
              <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-bottom mx-1" />
              Sneha
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-li">
                  <a
                    className={`nav-a ${activeSection === 'home' ? 'active' : ''}`}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-a ${activeSection === 'about' ? 'active' : ''}`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-a ${activeSection === 'project' ? 'active' : ''}`}
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-a ${activeSection === 'interest' ? 'active' : ''}`}
                    href="#interest"
                  >
                    Interest
                  </a>
                </li>
                <li className="nav-li">
                  <a
                    className={`nav-a ${activeSection === 'contact' ? 'active' : ''}`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <section id="home">
      <div className="home">
    <div className="container">
      <div className="row" id="rowhome" >
        <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 mb-5 p-5">
        <div className="heading">
          <h2 className='mb-3'>Hello!<br/>I am <span className='name'>Sneha</span></h2>
          <p className='mb-3 lead'>
          I am a dedicated developer skilled in front-end technologies, Python, and database management, with a focus on creating efficient and user-friendly digital solutions.          </p>
          
          <button id='btnstyle' onClick={downloadFile}><a href="#">Download CV</a></button>
          <button  id='btnstyle1'><a href="mailto:m.sneha161102@gmail.com?subject=Job Inquiry&body=Hello Sneha,">Hire Me </a></button>


          
                 </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center mt-3 mb-5" id='banimg'>
        <img src={banner} alt="Banner Image"  style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
    </div>
      </section>

      <section id="about">
      <div className="about">
    <div className="container">
    <h2 className='mb-3 text-center pt-5' id="port">About Me</h2>
      <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center mt-3 mb-5" id='banimg'>
        <img src={about} alt="Banner Image"  style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 d-flex justify-content-center  mt-5 mb-5">
        <div className="heading  px-3 ">
          
          <p className='mb-4' id="abt">
          Hello! I’m M. Sneha, a skilled and innovative Front-End Developer. With a strong foundation in HTML5, CSS3, JavaScript (ES6+), I specialize in crafting responsive, intuitive, and engaging user interfaces.

I thrive at the intersection of design and technology, translating creative concepts from tools like Figma into scalable and functional web solutions. My portfolio includes a diverse range of projects,like lightweight frameworks for web navigation. These experiences demonstrate my ability to deliver high-quality results while solving complex development challenges.
 </p>
          <div className="d-flex justify-content-center align-items-center mb-5">
          <button id='btnstyle'><a href="https://github.com/snehasparkles" target="_blank"><img src={icon1} width="30px" height="30px"/></a></button>
          <button id='btnstyle'><a href="https://www.linkedin.com/in/sneha-m-57b284228/" target="_blank"><img src={icon2} width="30px" height="30px"/></a></button>
          <button id='btnstyle'  onClick={downloadFile} ><img src={icon3} width="30px" height="30px"/></button>
          </div>
          <div className="mb-5">
            <p className="toolsheading">Front-End Technologies</p>
            <div className="icons ">
            <img src={html} width="50px" height="50px"/>
            <img src={css} width="50px" height="50px"/>
            <img src={js} width="50px" height="50px"/>
            <img src={react} width="50px" height="50px"/>
            </div>
          </div>
          <div className="mb-5">
            <p className="toolsheading">Back-End Technologies</p>
            <div className="icons" >
            <img src={flask} width="50px" height="50px"/>
            <img src={node} width="70px" height="50px"/>
            <img src={express} width="50px" height="50px"/>
            </div>
          </div>

          <div className="mb-5">
            <p className="toolsheading">Databases</p>
            <div className="icons" >
            <img src={mysql} width="70px" height="50px"/>
            </div>
          </div>

          <div className="mb-5">
            <p className="toolsheading">Programming Languages</p>
            <div className="icons" >
            <img src={python} width="50px" height="50px"/>
            </div>
          </div>

          <div className="mb-5">
            <p className="toolsheading">Design</p>
            <div className="icons" >
            <img src={figma} width="50px" height="60px"/>
            <img src={canva} width="50px" height="50px"/>
            </div>
          </div>

          <div className="mb-5">
            <p className="toolsheading">Tools</p>
            <div className="icons">
            <img src={vs} width="50px" height="50px"/>
            <img src={jupiter} width="50px" height="50px"/>
            <img src={github} width="50px" height="50px"/>
            <img src={postman} width="50px" height="50px"/>
            </div>
          </div>

        </div>
        </div>

      </div>
    </div>
    </div>

      </section>

      <section id="project">
      <div className="interest">
        <div className="container">
        <h2 className='mb-3 text-center  pt-5' id="port">Projects</h2>
        <div className="row">
          <div className="col-md-4 mt-3 mb-3">
          <div className="card" id="card1">
          <img className="card-img-top" src={navframework} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text text-center">Nav Framework</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://navtagdocs.web.app/" className="btn btn-outline-dark mx-3" id="probtn"   target="_blank">website Link</a>
            <a href="https://github.com/MANIKANDANMLT/nav" className="btn btn-outline-dark" target="_blank">Git Link</a>

            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={smltool} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Weather App</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/weather_app" className="btn btn-outline-dark" target="_blank">Git Link</a>
            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={aircons} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Website For Home Appliance Service</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://mukeshaircons.vercel.app/" className="btn btn-outline-dark mx-3" target="_blank">Live Link</a>
            <a href="https://github.com/snehasparkles/AIRCONS.git" className="btn btn-outline-dark" target="_blank">Git Link</a>

            </div>

          </div>
        </div>
          </div>
        </div>

        <div className="row">
        <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={flaskblog} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">A simple Blog Web Application</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://storysift-blog-jlfv.onrender.com/login" className="btn btn-outline-dark mx-3" target="_blank">Live Link</a>
            <a href="https://github.com/snehasparkles/flask_blog.git" className="btn btn-outline-dark" target="_blank">Git Link</a>

            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={reactjs} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">A simple qr generator app</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/QR_generator.git" className="btn btn-outline-dark" target="_blank">Git Link</a>
            </div>

          </div>
        </div>
          </div>


          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={aari} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Website for Aariwork Embroidery</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://mgms-aariworks.onrender.com/" className="btn btn-outline-dark mx-3" target="_blank">Live Link</a>
            <a href="https://github.com/snehasparkles/Aariwork_website" className="btn btn-outline-dark" target="_blank">Git Link</a>
            </div>

          </div>
        </div>
          </div>
          
        </div>






        </div>
      </div>
      </section>

      <section id="interest">
      <div className="interest">
      <div className="container">
      <h2 className='mb-3 text-center pt-5' id="port">Interest</h2>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center mt-3 mb-3">
            <div>
              <div className="inter">
                <p>Front-End Developer</p>
              </div>
              <div className="inter">
                <p>Back-End Developer</p>
              </div>
              <div className="inter">
                <p>Database Management</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center mt-3 mb-5" id='banimg'>
          <img src={interestimg} alt="Banner Image"  style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center mt-3 mb-5">
            <div>
              <div className="inter">
                <p>Software Developer</p>
              </div>
              <div className="inter">
                <p>UI/UX Designer</p>
              </div>
              <div className="inter">
                <p>Trainer</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
      </section>


      <section id="contact">
    <div className="home">
      <div className="container">
      <h2 className='mb-3 text-center pt-5' id="port">Contact Form</h2>
        <Form />
      </div>
    </div>
  </section>





  <div>     
        
        <footer id='foot'>
          
    <div className="text-center p-3">

   
    <a 
  href="mailto:m.sneha161102@gmail.com" 
  style={{ textDecoration: 'none' }} 
  className="text-white"
>
  <p className="text-white">
    Employ Me
    <img 
      src={email} 
      width="40px" 
      height="30px" 
      className="footimg" 
      alt="email icon"
    />
  </p>
</a>
  </div>
</footer></div>
    </>
  )
}

export default App

