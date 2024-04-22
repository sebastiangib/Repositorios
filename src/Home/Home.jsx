import "./Home.css"
import { Inicio } from "../Inicio/Inicio";
import { OtrosServicios } from "../OtrosServicios/OtrosServicios";
import { Testimonios } from "../Testimonios/Testimonios";
import { Galeria } from "../Galeria/Galeria";

export function Home(){
    return(
        <>
        <div className="home">
        <Inicio/>
        <OtrosServicios/>
        <Testimonios/>
        <Galeria/>
        </div>
        </>
    )
}