import './OtrosServicios.css';

import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react';

export function OtrosServicios(){
  useEffect(function(){
    const wow = new WOW();
    wow.init();
  },[])
    return(
        <>
        <section className="ourServices">
      <h2  className='wow animate__animated animate__slideInLeft'>Nuestros Servicios</h2>
      <div className="servicesContainer">
        {/* Ejemplo de servicio */}
        <div className="serviceItem wow animate__animated animate__slideInRight">
          <img src={require("../../src/images/servicios.jpg")} alt="Descripción del Servicio" />
          <h3>Nombre del Servicio</h3>
          <p>Breve descripción del servicio ofrecido.</p>
          <button>Más Información</button>
        </div>
        {/* Repite los elementos de servicio según sea necesario */}
      </div>
    </section>
        </>
    )
}