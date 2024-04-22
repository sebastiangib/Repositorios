import "./Tienda.css";
import slider1 from '../../src/images/slider1.png';
import slider2 from '../../src/images/slider2.png';
import slider3 from '../../src/images/slider3.png';
import slider4 from '../../src/images/slider4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShareNodes, faWifi, faNetworkWired, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import { DataContext } from "../Context/Dataprovider";
import React, {useContext, useState, useRef, useEffect} from "react";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {
  
  const value = useContext(DataContext)
  const [productos] = value.productos
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const productosRef = useRef(null);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    productosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSlide = document.querySelector(".carousel-item.active");
      const nextSlide = currentSlide.nextElementSibling || document.querySelector(".carousel-item:first-child");
      currentSlide.classList.remove("active");
      nextSlide.classList.add("active");
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); // Este efecto se ejecutará solo una vez después del montaje del componente

  return(
    <>
    <div className="contenedorTienda wow animate__animated animate__heartBeat">
        <div className="d-flex justify-content-center align-items-center h-100">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src={slider4}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={slider1}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={slider2}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src={slider3}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" style={{top: '1%'}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" style={{top: '1%'}}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    <div className="container-all wow animate__animated animate__zoomIn">
        <h1 className="main-title">¡Explora nuestra tienda!</h1>
        <div className="container-box">
          <a href="#" onClick={(e) => { e.preventDefault(); handleCategoriaClick("Exclusivo"); }}>
            <div className="box box1">
            <FontAwesomeIcon icon={faNetworkWired} className="icon"/>
              <h4 className="title">Exclusivo</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleCategoriaClick("Compartido"); }}>
            <div className="box box2">
            <FontAwesomeIcon icon={faShareNodes} className="icon"/>
              <h4 className="title">Compartido</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleCategoriaClick("Inalambrico"); }}>
            <div className="box box3">
            <FontAwesomeIcon icon={faWifi} className="icon"/>
              <h4 className="title">Inalámbricos</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleCategoriaClick("Mixto"); }}>
            <div className="box box4">
            <FontAwesomeIcon icon={faNetworkWired} className="icon"/> &nbsp; 
            <FontAwesomeIcon icon={faWifi} className="icon"/>
              <h4 className="title">Mixtos</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleCategoriaClick("Comunicacion"); }}>
            <div className="box box5">
            <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
              <h4 className="title">Comunicación</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>
        </div>
      </div>
      <h1 className="tituloTienda wow animate__animated animate__slideInUp">PRODUCTOS</h1>
      <div className="productos wow animate__animated animate__slideInUp" ref={productosRef}>
        {productos.map((producto) =>
          categoriaSeleccionada === "" || producto.category === categoriaSeleccionada ? (
            <ProductoItem
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            />
          ) : null
        )}
      </div>
    </>
  )
}

export default ProductosLista