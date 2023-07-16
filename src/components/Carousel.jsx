import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import stylesCarosel from './styles/carosel.css'

export const Carousel = () => {


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
    
     <div className='carousel-container'>
      <h2 className='h2'>Tecnologias</h2>
      <Slider {...settings}>
        <div >
          <img src="./imgs/git-removebg-preview.png" alt="Image 1"  width={'350px'}/>
        </div>
        <div>
          <img src="./imgs/css-removebg-preview.png" alt="Image 2"  width={'200px'}/>
        </div>
        <div>
          <img src="./imgs/boo-removebg-preview.png" alt="Image 3"  width={'320px'}/>
        </div>
        <div>
          <img src="./imgs/react-removebg-preview.png" alt="Image 3"  width={'200px'}/>
        </div>
        <div>
          <img src="./imgs/Tailwind-img-removebg-preview.png" alt="" srcset=""  width={'200px'}/>
        </div>
        <div>
          <img src="./imgs/5847f5bdcef1014c0b5e489c-removebg-preview.png" alt="" srcset=""  width={'200px'}/>
        </div>
        <div>
          <img src="./imgs/Unofficial_JavaScript_logo_2.svg.png" alt="" srcset=""  width={'200px'}/>
        </div>
        <div>
          <img src="./imgs/Captura_de_pantalla_2023-07-13_234631-removebg-preview.png" alt="" srcset=""  width={'200px'}/>
        </div>
      </Slider>
    </div>
  );
};

