import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";
import { useParams } from "react-router-dom";
import "./ProductoDetalles.css";
import { ProductoItem } from "./ProductoItem";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito
  const [detalle, setDetalle] = useState([]);
  const params = useParams();
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState("");
  let item = 0;

  useEffect(() => {
    productos.forEach((producto) => {
        item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
        setUrl(0);
      }
    });
  }, [params.id, productos]);

  if(detalle.length < 1) return null;

  return (
    <>
      <div className="detalles">
        <h2>{detalle.title}</h2>
        <br/>
        <p className="price">${detalle.price}</p>
        <br/>
        <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito 🛒</button>
        <br/>
        {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
            
        }
        <br/>
        <div className="description">
          <p>
            <b>Descripcion:</b> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed tempor enim id nisl pellentesque, eu lobortis
            nulla fringilla. Nunc eget nulla sed purus venenatis vestibulum.
            Fusce porta libero quis viverra aliquam. Mauris vitae quam ac ex
            bibendum facilisis vitae at nisi. Phasellus sed erat sed felis
            iaculis congue a ac quam. Nulla facilisi. Integer rutrum bibendum
            ante, a vestibulum velit auctor vel. Nulla facilisi. Donec nec nulla
            at nunc lobortis tincidunt vel vel libero. Cras vehicula tortor eget
            sapien varius dapibus. <br /> <br /> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed tempor enim id nisl pellentesque,
            eu lobortis nulla fringilla. Nunc eget nulla sed purus venenatis
            vestibulum. Fusce porta libero quis viverra aliquam. Mauris vitae
            quam ac ex bibendum facilisis vitae at nisi. Phasellus sed erat sed
            felis iaculis congue a ac quam. Nulla facilisi. Integer rutrum
            bibendum ante, a vestibulum velit auctor vel. Nulla facilisi. Donec
            nec nulla at nunc lobortis tincidunt vel vel libero. Cras vehicula
            tortor eget sapien varius dapibus.
          </p>
        </div>
      </div> <br/><br/><br/>

      <h2 className="relacionados">Productos Relacionados</h2>
      <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  );
};
