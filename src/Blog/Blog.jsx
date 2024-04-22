import "./Blog.css"
import user1 from "../../src/images/user1.png"

export function Blog(){
    return(
        <>
        <section id="principal">
            <section id="publicaciones">
                <article className="publi wow animate__animated animate__slideInUp">
                    <a href="" className="enlace-publi"><h2 className="titulo-publi">Titulo de la noticia 1</h2></a>
                    <img src={user1} alt="" className="img-publi"/>
                    <p>
                        <strong>Por:</strong><span className="datos-publicaciones">Pepito Perez</span>
                        &nbsp; &nbsp;
                        <strong>Fecha: </strong><span className="datos-publicaciones">Miercoles 20 de Marzo del 2024</span>
                    </p>
                    <p className="parrafo-publi">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis incidunt temporibus, nisi, nemo, qui dolore quae ipsum molestiae labore dolores consequatur est ullam praesentium dolorem inventore libero architecto dicta voluptates!
                    </p>

                    <a href="" className="leer-mas">Leer mas...</a>&nbsp;
                    <span className="num-comentarios">20 comentarios</span>
                </article>

                <article className="publi wow animate__animated animate__slideInUp">
                    <a href="" className="enlace-publi"><h2 className="titulo-publi">Titulo de la noticia 2</h2></a>
                    <img src={user1} alt="" className="img-publi"/>
                    <p>
                        <strong>Por:</strong><span className="datos-publicaciones">Pepito Perez</span>
                        &nbsp; &nbsp;
                        <strong>Fecha: </strong><span className="datos-publicaciones">Miercoles 20 de Marzo del 2024</span>
                    </p>
                    <p className="parrafo-publi">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis incidunt temporibus, nisi, nemo, qui dolore quae ipsum molestiae labore dolores consequatur est ullam praesentium dolorem inventore libero architecto dicta voluptates!
                    </p>

                    <a href="" className="leer-mas">Leer mas...</a>&nbsp;
                    <span className="num-comentarios">20 comentarios</span>
                </article>

                <article className="publi wow animate__animated animate__slideInUp">
                    <a href="" className="enlace-publi"><h2 className="titulo-publi">Titulo de la noticia 3</h2></a>
                    <img src={user1} alt="" className="img-publi"/>
                    <p>
                        <strong>Por:</strong><span className="datos-publicaciones">Pepito Perez</span>
                        &nbsp; &nbsp;
                        <strong>Fecha: </strong><span className="datos-publicaciones">Miercoles 20 de Marzo del 2024</span>
                    </p>
                    <p className="parrafo-publi">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis incidunt temporibus, nisi, nemo, qui dolore quae ipsum molestiae labore dolores consequatur est ullam praesentium dolorem inventore libero architecto dicta voluptates!
                    </p>

                    <a href="" className="leer-mas">Leer mas...</a>&nbsp;
                    <span className="num-comentarios">20 comentarios</span>
                </article>

                <article className="publi wow animate__animated animate__slideInUp">
                    <a href="" className="enlace-publi"><h2 className="titulo-publi">Titulo de la noticia 4</h2></a>
                    <img src={user1} alt="" className="img-publi"/>
                    <p>
                        <strong>Por:</strong><span className="datos-publicaciones">Pepito Perez</span>
                        &nbsp; &nbsp;
                        <strong>Fecha: </strong><span className="datos-publicaciones">Miercoles 20 de Marzo del 2024</span>
                    </p>
                    <p className="parrafo-publi">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis incidunt temporibus, nisi, nemo, qui dolore quae ipsum molestiae labore dolores consequatur est ullam praesentium dolorem inventore libero architecto dicta voluptates!
                    </p>

                    <a href="" className="leer-mas">Leer mas...</a>&nbsp;
                    <span className="num-comentarios">20 comentarios</span>
                </article>

                <article className="publi wow animate__animated animate__slideInUp">
                    <a href="" className="enlace-publi"><h2 className="titulo-publi">Titulo de la noticia 5</h2></a>
                    <img src={user1} alt="" className="img-publi"/>
                    <p>
                        <strong>Por:</strong><span className="datos-publicaciones">Pepito Perez</span>
                        &nbsp; &nbsp;
                        <strong>Fecha: </strong><span className="datos-publicaciones">Miercoles 20 de Marzo del 2024</span>
                    </p>
                    <p className="parrafo-publi">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis incidunt temporibus, nisi, nemo, qui dolore quae ipsum molestiae labore dolores consequatur est ullam praesentium dolorem inventore libero architecto dicta voluptates!
                    </p>

                    <a href="" className="leer-mas">Leer mas...</a>&nbsp;
                    <span className="num-comentarios">20 comentarios</span>
                </article>
                
                <div id="paginacion" className="wow animate__animated animate__slideInUp">
                    <p>Anteriores publicaciones &nbsp; &nbsp; <a href="" className="enlace-paginacion">Siguiente publicaciones</a></p>
                </div>
            </section>

            <section id="sidebar">
                <section id="buscar" className="wow animate__animated animate__slideInDown">
                    <h2 className="encabezado-sidebar">Buscar</h2>
                    <form>
                        <input type="text" name="buscar" placeholder="Buscar" />&nbsp;
                        <button className="boton">Ok</button>
                    </form>
                </section>

                <section id="categorias" className="wow animate__animated animate__slideInDown">
                <h2 className="encabezado-sidebar">Categorias</h2>
                    <a href="" className="enlace-sidebar">Categoria 1</a>
                    <a href="" className="enlace-sidebar">Categoria 2</a>
                    <a href="" className="enlace-sidebar">Categoria 3</a>
                    <a href="" className="enlace-sidebar">Categoria 4</a>
                    <a href="" className="enlace-sidebar">Categoria 5</a>
                </section>

                <section id="sitios-amigos" className="wow animate__animated animate__slideInRight">
                <h2 className="encabezado-sidebar">Sitios Amigos</h2>
                    <a href="" className="enlace-sidebar">Sitio 1</a>
                    <a href="" className="enlace-sidebar">Sitio 2</a>
                    <a href="" className="enlace-sidebar">Sitio 3</a>
                    <a href="" className="enlace-sidebar">Sitio 4</a>
                    <a href="" className="enlace-sidebar">Sitio 5</a>
                </section>

                <section id="ultimas-publicaciones" className="wow animate__animated animate__slideInRight">
                <h2 className="encabezado-sidebar">Ultimas publicaciones</h2>
                    <a href="" className="enlace-sidebar">
                        <h4>Titulo de la noticia 1</h4>
                        <p>Esto es una descripcion de la noticia publiciada el dia de hoy</p>
                    </a>

                    <a href="" className="enlace-sidebar">
                        <h4>Titulo de la noticia 2</h4>
                        <p>Esto es una descripcion de la noticia publiciada el dia de hoy</p>
                    </a>

                    <a href="" className="enlace-sidebar">
                        <h4>Titulo de la noticia 3</h4>
                        <p>Esto es una descripcion de la noticia publiciada el dia de hoy</p>
                    </a>

                    <a href="" className="enlace-sidebar">
                        <h4>Titulo de la noticia 4</h4>
                        <p>Esto es una descripcion de la noticia publiciada el dia de hoy</p>
                    </a>

                    <a href="" className="enlace-sidebar">
                        <h4>Titulo de la noticia 5</h4>
                        <p>Esto es una descripcion de la noticia publiciada el dia de hoy</p>
                    </a>
                </section>
            </section>
        </section>
        </>
    )
}