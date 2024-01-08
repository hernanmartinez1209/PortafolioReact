import React from "react";
import stylesAbaut from "../components/styles/stylesAbaut.css";
const Abaut = () => {
  return (
    <div className="About">
      <h2 className="title__About">Quien soy</h2>
      <h4 className="subtitle__About">
      Información principal sobre mí y lo que quiero hacer.
      </h4>
      {/* <img
        className="img__about"
        src="./imgs/fotoPersonal.jpeg"
        alt="Photo__personal"
      /> */}
      <article className="info__About">
        <h2 className="Name__About">
        Hola soy Hernan Martinez y soy De Tegucigalpa Honduras
        </h2>
        <p className="presentacion__About">
        hola Soy soy un Desarrollador front-end mandame un mensaje por el
          formulario de igual manera te dejo mis links aqui abajo para que
          puedas contactarte conmigo y hagamos cosas increíbles 

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
            Col travesía Tegucigalpa Honduras
          </li>
          <li className="info_text">
            <span>
              <i className="fa-solid fa-network-wired"></i>
            </span>
            Dispónible
          </li>
        </ul>
        <br />
      <a href="./docs/CvHernan_Martinez.pdf" className="btn__cv">
        Descargar Mi CV
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

        </a>
      </article>
      {/* <button className="btn__cv">Dolownland My CV</button> */}
     <br />
        
        <div className="mune__bottom">
          <ul>
            <h2>Mi educacion</h2>
            <div className="education">
             <div className="item__education">
             <h4>Academlo</h4>
              <h3>2022 - actual</h3>
              <img src="./imgs/academlo-icon-shadow-removebg-preview.png" alt="academlo" width="157px"/>
              </div>
              <div className="item__edicatio">
              <h4>Universidad Nacional Autónoma De Honduras</h4>
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
