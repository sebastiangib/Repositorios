import "./AcercaDe.css"
import backgroundImage from '../../src/images/home.png';
import gerente2 from "../../src/images/gerente2.jpg"
import gerente from "../../src/images/gerente.jpg"
import team1 from "../../src/images/team1.jpg"
import team2 from "../../src/images/team2.jpg"
import team3 from "../../src/images/team3.jpg"
import Footer from "../Footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function AcercaDe(){
    return(
        <>
        <div className="aboutPage">
      {/* Header con imagen de fondo y título */}
      <div 
        className="aboutHeader" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>
      <section className="about">
      <div className="main">
        <div className="container my-5">
        <div className="row justify-content-start">
        <div className="col-md-6 col-12"><img src={gerente} className="about-img wow animate__animated animate__slideInLeft"/></div>
          <div className="col-md-6 col-12 about-text wow animate__animated animate__slideInRight">
            <h1>About Us</h1>
            <h5>Developer<span className="spaan"> & Designer</span></h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates tenetur, animi maiores quo soluta iure consectetur id velit atque ad cum? Quia, quod. Eaque doloribus voluptatum minima asperiores earum!</p>
            <button className="about-button">Let's Talk</button>
          </div>
          <div className="col-md-6 col-12 about-text wow animate__animated animate__slideInLeft">
            <h1>About Us</h1>
            <h5>Developer<span className="spaan"> & Designer</span></h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptates tenetur, animi maiores quo soluta iure consectetur id velit atque ad cum? Quia, quod. Eaque doloribus voluptatum minima asperiores earum!</p>
            <button className="about-button">Let's Talk</button>
          </div>
          <div className="col-md-6 col-12"><img src={gerente2} className="aboutimg wow animate__animated animate__slideInRight"/></div>
          </div>
          </div>
        </div>
        <div className="body">
        <h1 className="titleteam wow animate__animated animate__zoomIn">Nuestro Equipo</h1>
          <div className="contenedoor">
            <div className="our-team wow animate__animated animate__backInLeft">
              <div className="pic">
                <img src={team1} alt="" />
              </div>
              <div className="team-content">
                <h3 className="tittle">Emely</h3>
                <span className="post">Developer</span>
              </div>
              <ul className="social">
                <li><a href="#"></a><FontAwesomeIcon icon={faFacebook}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faTwitter}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faInstagram}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faLinkedin}className="icono"/></li>
              </ul>
            </div>
            <div className="our-team wow animate__animated animate__backInUp">
              <div className="pic">
                <img src={team2} alt="" />
              </div>
              <div className="team-content">
                <h3 className="tittle">Ammy</h3>
                <span className="post">Web Designer</span>
              </div>
              <ul className="social">
                <li><a href="#"></a><FontAwesomeIcon icon={faFacebook} className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faTwitter} className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faInstagram} className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faLinkedin} className="icono"/></li>
              </ul>
            </div>
            <div className="our-team wow animate__animated animate__backInRight">
              <div className="pic">
                <img src={team3} alt="" />
              </div>
              <div className="team-content">
                <h3 className="tittle">Mariana</h3>
                <span className="post">Gerente</span>
              </div>
              <ul className="social">
                <li><a href="#"></a><FontAwesomeIcon icon={faFacebook}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faTwitter}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faInstagram}className="icono"/></li>
                <li><a href="#"></a><FontAwesomeIcon icon={faLinkedin}className="icono"/></li>
              </ul>
            </div>
          </div>
    </div>
</section>
    </div>
        </>
    )
}