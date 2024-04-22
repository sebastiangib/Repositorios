import "./Inicio.css";
import "animate.css";
import WOW from "wow.js";
import { useEffect } from "react";

import img1 from "../../src/images/inicio1.jpg";
import img2 from "../../src/images/inicio2.jpg";
import img3 from "../../src/images/inicio3.jpg";
import img4 from "../../src/images/inicio4.jpg";
import img5 from "../../src/images/inicio5.jpg";
import img6 from "../../src/images/inicio6.jpg";
import logo1 from "../../src/images/amazonalexa.jpg"
import logo2 from "../../src/images/applehome.jpg"
import logo3 from "../../src/images/asisgoogle.jpg"

export function Inicio() {
  useEffect(function () {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <section className="inicio">
        <section className="banner">
          <div className="hero-content">
            <h1 className="wow animate__animated animate__slideInDown">
              Somos un ecosistema que aborda cada uno de los temas relacionados
              a domótica
            </h1>
            <br />
            <p className="wow animate__animated animate__slideInDown">
              Instruimos y acompañamos a nuestros clientes desde el más mínimo
              detalle hasta el más complejo.
            </p>
            <br />
            <div className="hero-ctas">
              <a href="#conocemas">
              <button className="cta-primary wow animate__animated animate__slideInUp">
                Conoce más
              </button>
              </a>
            </div>
          </div>
        </section>
        <h1 id="conocemas" className="wow animate__animated animate__slideInDown">
          Convierte tu hogar en <br /> una casa inteligente
        </h1>
        <br />
        <p className="wow animate__animated animate__zoomIn">
          Con Nosotros es más fácil controlar todos los dispositivos de tu casa
          inteligente, desde <br /> cualquier móvil o asistente de voz.
        </p>
        <br />
        <div className="botones">
          <a href="tienda">
            <button className="boton1 wow animate__animated animate__slideInLeft">Ver Catálogo & Precios</button>&nbsp;
          </a>
          &nbsp; &nbsp;
          <a href="portafolio">
            <button className="boton2 wow animate__animated animate__slideInRight">Conoce los Productos</button>
          </a>
        </div>
        <br /> <br />
        <div className="container my-5">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 wow animate__animated animate__slideInLeft">
              <img src={img1} alt="" className="columimg" />
            </div>
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInRight">
              <h1>
                Controlar tu
                <br />
                casa ahora es
                <br />
                más fácil
              </h1>
              <br />
              <p>
                Con nosotros puedes controlar de forma sencilla y segura los
                <br />
                dispositivos inteligentes, seguridad, iluminación y
                electrodomésticos que
                <br />
                utilices en tu hogar, y todo ello desde tu celular, tablet y
                nuestras
                <br />
                innovadoras centrales de control.
              </p>
            </div>
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInLeft">
              <h1>
                Control de
                <br />
                Voz
              </h1>
              <br />
              <p>
                Nuestros productos permiten controlar otros dispositivos
                <br />
                inteligentes de tu hogar mediante la voz. Compatible
                <br />
                con los asistentes de voz Apple HomeKit, Amazon
                <br />
                Alexa y el Asistente de Google
              </p>
            </div>
            <div className="col-md-6 col-12 wow animate__animated animate__slideInRight">
              <img src={img2} alt="" className="columimg" />
            </div>
            <div className="col-md-6 col-12 wow animate__animated animate__slideInLeft">
              <img src={img3} alt="" className="columimg" />
            </div>
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInRight">
              <h1>
                Control de
                <br />
                Accesos
              </h1>
              <br />
              <p>
                La tranquilidad comienza desde la puerta de
                <br />
                tu casa. Abre tu puerta con clave, huella, tarjeta o,
                <br />
                incluso, desde el celular.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid fw-bold text-white text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-3 wow animate__animated animate__backInLeft">
              <img
                src={logo1}
                alt=""
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="txtlogos">Amazon Alexa</h4>
            </div>
            <div className="col-12 col-md-3 wow animate__animated animate__backInUp">
              <img
                src={logo2}
                alt=""
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="txtlogos">Apple HomeKit</h4>
            </div>
            <div className="col-12 col-md-3 wow animate__animated animate__backInRight">
              <img
                src={logo3}
                alt="s1"
                className="img-fluid w-100 rounded blancoNegro"
              />
              <h4 className="txtlogos">Asistente de Google</h4>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInLeft">
              <h1>Ambientes</h1>
              <br />
              <p>
              Diversas aplicaciones que te permiten crear ambientes que<br/>activan varios dispositivos al mismo tiempo con un<br/>solo comando. Por ejemplo, puedes crear un ambiente<br/>llamado “Hasta pronto” para apagar las luces, activar el<br/>sistema de seguridad y apagar el sistema de aire<br/>acondicionado, o uno llamado “Noche de películas”,<br/>que encienda tu TV con, baje las persianas y atenúe las<br/>luces.
              </p>
            </div>
            <div className="col-md-6 col-12 wow animate__animated animate__slideInRight">
              <img src={img4} alt="" className="columimg" />
            </div>
            <div className="col-md-6 col-12 wow animate__animated animate__slideInLeft">
              <img src={img5} alt="" className="columimg" />
            </div>
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInRight">
              <h1>
                Seguridad
              </h1>
              <br />
              <p>
               Ofrecemos sistemas automatizados de<br/>seguridad para proteger tu propiedad. El conjunto de<br/> productos de seguridad de LifeSmart son pequeñas<br/>maravillas que funcionan en conjunto para proteger tu<br/>casa con una armadura digital siempre conectada.
              </p>
            </div>
            <div className="col-md-6 col-12 txt wow animate__animated animate__slideInLeft">
              <h1>
                Iluminación<br/>LED
              </h1>
              <br />
              <p>
              Nuestra tecnologia acerca la iluminación inteligente a los<br/>hogares, para que puedas crear momentos especiales<br/>y automatizar las luces fácilmente.
              </p>
            </div>
            <div className="col-md-6 col-12 wow animate__animated animate__slideInRight">
              <img src={img6} alt="" className="columimg" />
            </div>
          </div>
        </div>
        <div className="banner2 wow animate__animated animate__jackInTheBox">
        </div>
        <div className="vivemas">
        <h1 className="wow animate__animated animate__fadeInTopLeft">Vive una vida más<br/>inteligente</h1>
        <br />
        <p className="wow animate__animated animate__fadeInBottomRight">Cada espacio de tu casa potenciado con el sistema de SmartLiving, se transforma para<br/>brindarte una experiencia única y personalizada, que hará tu vida más fácil, cómoda y segura.</p>
        </div>
      </section>
    </>
  );
}
