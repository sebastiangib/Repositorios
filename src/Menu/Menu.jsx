import "./Menu.css";
import React, { useContext } from "react";
import logo from "../../src/images/logo.PNG";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Dataprovider";

export const MenuTienda = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">SmartLiving</h1>

        <label className="label_hamburguesa" for="menu_hamburguesa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="list_icon"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </label>
        <input className="menu_hamburguesa" type="checkbox" id="menu_hamburguesa" />

        <ul className="ul_links">
          <li className="li_links">
            <Link to="/" className="link">Inicio</Link>
          </li>
          <li className="li_links">
            <Link to="/portafolio" className="link">Portafolio</Link>
          </li>
          <li className="li_links">
            <Link to="/blog" className="link">Blog</Link>
          </li>
          <li className="li_links">
            <Link to="/tienda" className="link">Tienda</Link>
          </li>
          <li className="li_links">
            <Link to="/contacto" className="link">Contacto</Link>
          </li>
          <li className="li_links">
            <Link to="/sobrenosotros" className="link">Sobre Nosotros</Link>
          </li>
        </ul>
        <div className="cart" onClick={toggleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
      </nav>

      
    </header>
  );
};
