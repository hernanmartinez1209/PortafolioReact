import React from "react";
import stylesHeader from "../components/styles/stylesHeader.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stylesCarosel from "./styles/carosel.css";
import { Carousel } from "./Carousel";
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Hedaer">
      <h2>Hola</h2>
      <h1>Soy diseñador web Front-end</h1>
      <div className="caja_perfil">
      <img
        src="./imgs/Captura_de_pantalla_2023-07-13_220616-removebg-preview.png"
        alt="Photo__personal"
        width={"500px"}
      />
      </div>
      <p className="p__Header">
        !Ven y Creemos sitios espectaculares Contactame!
      </p>
      {/* <button className='btn__Header'>More About Me</button> */}
      <article className="box__info-header">
        <ul className="inf__Header">
          <li className="links__header">
            <a href="https://github.com/hernanmartinez1209" target="blank">
              <i className="icon_header fa-brands fa-github"></i>
            </a>
          </li>
          <li className="links__header">
            <a href="https://wa.me/+50497354802" target="blank">
              <i className="icon_header fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li className="links__header">
            <a
              href="https://www.linkedin.com/in/hernan-martinez-04713b249/"
              target="blank"
            >
              <i className="icon_header fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </article>
      
      
    </div>
  );
};

export default Header;
