import React from 'react'
import stylesService from '../components/styles/stylesService.css'
const Services = () => {
  return (
    <div className='Services'>
      <h2 className='title__service'>My Sevices</h2>
      <p className='info__service'>i have worked with A Number Of Clients.</p>
      <div className="services__cart">
        <img src="https://img.icons8.com/fluency/512/media-queries.png" alt="img__services" width="97px" />
        <h2>Web Delepment</h2>
         <p>Podemos definir el Desarrollo Web como el proceso de creación de un sitio web, una aplicación o un software. Se debe hacer un estudio para determinar las necesidades del cliente y a partir de ahí poner en marcha una interfaz atractiva e incorporar funcionalidades para el usuario final.</p>
      </div>
      <div className="services__cart">
        <img src="https://bdevelopment.net/images/ico/deskapp.png" alt="img__services"  width="97px"/>
        <h2>Desktop Application</h2>
         <p>Una aplicación de escritorio es un programa de software que un usuario final puede ejecutar en una computadora independiente para realizar una tarea específica.</p>
      </div>
      <div className="services__cart">
        <img src="https://img.icons8.com/fluency/512/store-setting.png" alt="img__services" width="97px" />
        <h2>API Rest</h2>
         <p>creacion de api rest para el consumo de aplicaciones y usuarios.</p>
      </div>
      <div className="services__cart">
        <img src="https://img.icons8.com/fluency/512/remote-desktop--v2.png" alt="img__services" width="97px"/>
        <h2>IT Support</h2>
         <p>brindo soluciones para la instalación de equipos de cómputo y red de comunicación.</p>
      </div>
    </div>
  )
}

export default Services