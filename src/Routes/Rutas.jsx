import { Route, Routes } from "react-router-dom";
import {Home} from "../Home/Home"
import { Footer } from "../Footer/Footer";
import { Contacto } from "../Contacto/Contacto";
import { ProductosLista } from "../Tienda/Tienda";
import { Portafolio } from "../Portafolio/Portafolio";
import { AcercaDe } from "../AcercaDe/AcercaDe";
import { Blog } from "../Blog/Blog";
import { MenuTienda } from "../Menu/Menu";
import { DataProvider } from "../Context/Dataprovider";
import { Carrito } from "../Carrito/Carrito";
import {ProductoDetalles } from "../Tienda/ProductoDetalles"

export function Rutas(){
    return(
        <>
        <DataProvider>
        <MenuTienda/>
        <Carrito/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="tienda" element={<ProductosLista />} />
        <Route path="producto/:id" element={<ProductoDetalles />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="sobrenosotros" element={<AcercaDe />} />
        </Routes>  
        </DataProvider>
        <Footer/>
        </>
    )
}