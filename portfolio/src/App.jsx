import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "./images/logo2.png";
import banner from "./images/file2.png"
import about from "./images/file.png"
import icon1 from "./images/a1.png"
import icon2 from "./images/a2.png"
import icon3 from "./images/a3.png"
import html from "./images/html.jpg"
import css from "./images/css.jpg"
import js from "./images/js.jpg"
import react from "./images/react.jpg"
import bs from "./images/bs.jpg"
import flask from "./images/flask.jpg"
import node from "./images/nodejs.jpg"
import express from "./images/ex.png"
import mysql from "./images/mysql.jpg"
import mongodb from "./images/mongodb.jpg"
import python from "./images/py.jpg"
import java from "./images/java.jpg"
import figma from "./images/figma.jpg"
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

function App() {

  const downloadFile = () => {
    // Create a fake anchor element
    const link = document.createElement('a');
    link.download = 'M Sneha.pdf'; // specify the file name
    link.href = 'https://drive.google.com/file/d/1oSCxnX_bYSFSCfTl6NRk4H02z4-L89cs/view?usp=sharing'; // specify the file path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg  navbar-dark fixed-top" id = "nav">
    <div className="container-fluid">
    <a className="navbar-brand" href="#home" id="logo">
      <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-bottom mx-1"/>
      Sneha
    </a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-li">
            <a className="nav-a"  href="#home">Home</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="#about">About</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="#project">Project</a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="#interest" >Interest</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  <section id="home">
    <div className="home">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 mb-5 p-5">
        <div className="heading">
          <h2 className='mb-3'>Hello!<br/>I am <span className='name'>Sneha</span></h2>
          <p className='mb-3 lead'>
          I am a passionate developer proficient in frontend technologies, Python, Java, and database management.
          </p>
          
          <button id='btnstyle' onClick={downloadFile}><a href="#">Download CV</a></button>
          <button id='btnstyle1'><a href="mailto:m.sneha161102@gmail.com" target="_blank">Hire Me</a></button>
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
    <h2 className='mb-3 text-center text-light pt-5'>About Me</h2>
      <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center mt-3 mb-5" id='banimg'>
        <img src={about} alt="Banner Image"  style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-6 d-flex justify-content-center  mt-5 mb-5">
        <div className="heading  px-3 ">
          
          <p className='mb-2' id="abt">
          I'm Sneha, a computer science student who's really into making cool stuff with computers. I'm into both making websites look awesome (using React.js) and making sure they work smoothly behind the scenes (with Node.js). I'm pretty handy with databases like MongoDB and MySQL, where we store and fetch data. I also experiment with machine learning and use languages like Python and Java to make all of this happen. Plus, I'm quite good with Figma for designing how things look, and I know my way around using open APIs to get extra functionality. And yeah, I'm familiar with Flask too!          </p>
          <div className="d-flex justify-content-center align-items-center mb-5">
          <button id='btnstyle'><a href="https://github.com/snehasparkles" target="_blank"><img src={icon1} width="30px" height="30px"/></a></button>
          <button id='btnstyle'><a href="https://www.linkedin.com/in/m-sneha-57b284228" target="_blank"><img src={icon2} width="30px" height="30px"/></a></button>
          <button id='btnstyle'  onClick={downloadFile} ><img src={icon3} width="30px" height="30px"/></button>
          </div>
          <div className="mb-5">
            <p className="toolsheading">Front-End Technologies</p>
            <div className="icons ">
            <img src={html} width="50px" height="50px"/>
            <img src={css} width="50px" height="50px"/>
            <img src={js} width="50px" height="50px"/>
            <img src={react} width="50px" height="50px"/>
            <img src={bs} width="50px" height="50px" />
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
            <img src={mongodb} width="70px" height="50px"/>
            </div>
          </div>

          <div className="mb-5">
            <p className="toolsheading">Programming Languages</p>
            <div className="icons" >
            <img src={python} width="50px" height="50px"/>
            <img src={java} width="50px" height="50px"/>
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
        <h2 className='mb-3 text-center text-light pt-5'>Projects</h2>
        <div className="row">
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={flaskblog} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">A simple Blog Web Application</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://storysift-blog-jlfv.onrender.com/login" className="btn btn-dark mx-3" target="_blank">Live Link</a>
            <a href="https://github.com/snehasparkles/flask_blog.git" className="btn btn-dark" target="_blank">Git Link</a>

            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={smltool} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Supervised Machine Learning Tool</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/Supervised-Machine-Learning-Tool.git" className="btn btn-dark" target="_blank">Git Link</a>
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
            <a href="https://mukeshaircons.vercel.app/" className="btn btn-dark mx-3" target="_blank">Live Link</a>
            <a href="https://github.com/snehasparkles/AIRCONS.git" className="btn btn-dark" target="_blank">Git Link</a>

            </div>

          </div>
        </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={pythonsc} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Desktop Applications - Streamlined desktop apps for everyday tasks</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/Python-Desktop-Applications.git" className="btn btn-dark" target="_blank">Git Link</a>
            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={reactjs} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">React Project - <br/>  A simple qr generator app using react js </p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/QR_generator.git" className="btn btn-dark" target="_blank">Git Link</a>
            </div>

          </div>
        </div>
          </div>
          <div className="col-md-4 mt-3 mb-3">
          <div className="card">
          <img className="card-img-top" src={ml} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text text-center">Machine Learning Project - <br/>Airline Passenger satisfaction Prediction</p>
            <div className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/snehasparkles/Machine-Learning-Projects.git"  className="btn btn-dark" target="_blank">Git Link</a>
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
      <h2 className='mb-3 text-center text-light pt-5'>Interest</h2>
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
                <p>Full Stack Developer</p>
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
                <p>Machine Learning Engineer</p>
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

  <div>     
        
        <footer id='foot'>
          
    <div className="text-center p-3">

   
  <p className="text-white">Employ Me<a href="mailto:m.sneha161102@gmail.com"><img src={email} width="30px" height="30px" className="footimg"/></a> </p>
  </div>
</footer></div>
    </>
  )
}

export default App
