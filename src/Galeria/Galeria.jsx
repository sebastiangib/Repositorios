import "./Galeria.css"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Importando librerias de animaciones
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react';

// Importando imagenes
import galeria1 from "../../src/images/galeria1.jpg"
import galeria2 from "../../src/images/galeria2.jpg"
import galeria3 from "../../src/images/galeria3.jpg"
import galeria4 from "../../src/images/galeria4.jpg"

export function Galeria(){
  useEffect(function(){
    const wow = new WOW();
    wow.init();
  },[])
    return(
        <>
        <section className="gallery">
      <h2 className="wow animate__animated animate__zoomIn">Galería</h2>
      <p className="wow animate__animated animate__zoomIn">Ejemplos de trabajos o productos.</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={galeria2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galeria1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galeria3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galeria4} />
        </SwiperSlide>

      </Swiper>
    </section>
        </>
    )
}