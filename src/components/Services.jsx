import React from "react";
import stylesService from "../components/styles/stylesService.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <aside className="Services">
      <div className="carousel-container">
        <h2 className="title__service">Mi Servicios</h2>
        <p className="info__service1">
          soy diseñador web y te muestro mis servicios .
        </p>
        <Slider {...settings}>
          <div className="services__cart">
            <img
              src="https://img.icons8.com/fluency/512/media-queries.png"
              alt="img__services"
              width="97px"
            />
            <h2>Desarrollo web</h2>
            <p className="info_services">
              Podemos definir el Desarrollo Web como el proceso de creación de
              un sitio web, una aplicación o un software. Se debe hacer un
              estudio para determinar las necesidades del cliente y a partir de
              ahí poner en marcha una interfaz atractiva e incorporar
              funcionalidades para el usuario final.
            </p>
          </div>
          <div className="services__cart">
            <img
              src="https://bdevelopment.net/images/ico/deskapp.png"
              alt="img__services"
              width="97px"
            />
            <h2>Aplicación de escritorio</h2>
            <p className="info_services">
              Una aplicación de escritorio es un programa de software que un
              usuario final puede ejecutar en una computadora independiente para
              realizar una tarea específica.
            </p>
          </div>
          <div className="services__cart">
            <img
              src="https://img.icons8.com/fluency/512/store-setting.png"
              alt="img__services"
              width="97px"
            />
            <h2>API Rest</h2>
            <p className="info_services">
              creacion de api rest para el consumo de aplicaciones y usuarios.
            </p>
          </div>
          <div className="services__cart">
            <img
              src="https://img.icons8.com/fluency/512/remote-desktop--v2.png"
              alt="img__services"
              width="97px"
            />
            <h2>Soporte de TI</h2>
            <p className="info_services">
              brindo soluciones para la instalación de equipos de cómputo y red
              de comunicación.
            </p>
          </div>
        </Slider>
      </div>
    </aside>
  );
};

export default Services;
