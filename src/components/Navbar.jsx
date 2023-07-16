import React from "react";
import { Link } from "react-router-dom";
import stylesnavBar from "../components/styles/stylesnavBar.css";
import showMenu from './showmenu.js'
const Navbar = () => {
  
  
   

  return (
    <nav className="Navbar__contain">
      <img className="logo" src="./imgs/logo-removebg-preview.png" alt="" / >
      <div className="menu"id="menu">
        <Link className="nav-links" to="/">
          Inicio
        </Link>
        <Link className="nav-links" to="/Abaut">
          Sobre Mi
        </Link>
        <Link className="nav-links" to="/Proyectos">
          Proyectos
        </Link>
        <Link className="nav-links" to="/Services">
          Servicios
        </Link>
        <Link className="nav-links" to="/Contact">
          Contactame
        </Link>
      </div>
     
      <i onClick={showMenu} className="fa-solid fa-bars" id="iconMenu"></i>
  
    </nav>
  );
};

export default Navbar;
