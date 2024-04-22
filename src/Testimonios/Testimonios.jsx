import "./Testimonios.css"

import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react';

export function Testimonios(){
  useEffect(function(){
    const wow = new WOW();
    wow.init();
  },[])
    return(
        <>
        <section className="testimonials">
      <h2 className="wow animate__animated animate__slideInDown">Testimonios</h2>
      <div className="testimonialsContainer wow animate__animated animate__slideInUp">
        {/* Ejemplo de testimonio */}
        <blockquote className="testimonial">
          <p>“Estoy muy satisfecho con el servicio, mi hogar nunca había sido tan inteligente.”</p>
          <cite>– Nombre del Cliente</cite>
        </blockquote>
        {/* Repite los testimonios según sea necesario */}
      </div>
    </section>
        </>
    )
}