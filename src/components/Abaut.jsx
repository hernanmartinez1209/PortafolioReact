import React from "react";
import stylesAbaut from "../components/styles/stylesAbaut.css";
const Abaut = () => {
  return (
    <div className="About">
      <h2 className="title__About">About Me</h2>
      <h4 className="subtitle__About">
      Información principal sobre mí y lo que quiero hacer.
      </h4>
      <img
        className="img__about"
        src="./imgs/fotoPersonal.jpeg"
        alt="Photo__personal"
      />
      <article className="info__About">
        <h2 className="Name__About">
        Hola soy Hernan Martinez y soy De Tegucigalpa Honduras
        </h2>
        <p className="presentacion__About">
          hola Soy soy un Desarrollador frond-end mandame un mensaje por el
          formulario de igual manera te dejo mis links aqui abajo para que
          puedas contactarte con migo y agamos cosas increibles
        </p>
        <ul className="contain__About">
          <li className="info_text">
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            Hernan Martinez
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-gift"></i>
            </span>
            12-09-1999
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-globe"></i>
            </span>
            Honduras
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-house-laptop"></i>
            </span>
            developer Frontend
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-mobile-screen"></i>
            </span>
            +504 97354802
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-at"></i>
            </span>
            hernanconce1213@gmail
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-map-location"></i>
            </span>
            Col travesia Tegucigalpa Honduras
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-network-wired"></i>
            </span>
            Avaliable
          </li>
        </ul>
      </article>
      <a href="./docs/HOJADEVIDAHERNANMARTINEZ.pdf" className="btn__cv">Dolownland My CV</a>
      {/* <button className="btn__cv">Dolownland My CV</button> */}
     
        
        <div className="mune__bottom">
          <ul>
            <h2>My Education</h2>
            <div className="education">
             <div className="item__education">
             <h4>Acalemlo</h4>
              <h3>2022 - actual</h3>
              <img src="./imgs/academlo-icon-shadow-removebg-preview.png" alt="academlo" width="97px"/>
              </div>
              <div className="item__edicatio">
              <h4>Universidad Nacional Autonoma De Honduras</h4>
              <h3>UNAH</h3>
              <img src="./imgs/Escudo_de_la_UNAH.svg-removebg-preview.png" alt="UNAH" width="97px"/>
              </div>
            </div>
          </ul>
          
        </div>
      </div>
    
  );
};

export default Abaut;
