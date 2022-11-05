import React from 'react'
import stylesContac from'./styles/stylesContac.css'
import Form from './Form'


const Contact = () => {
    return (
        <div className='Contact'>
            <h2 className='title__contac'>Contact Me</h2>
            <p>Feel free To Contact Me Any Time.</p>
            <Form />
            <article>
                <h3>let's talk about everything!</h3>
                <p>Que esperas mandame un mensaje Comentame tu idea de tu App web para tu negocio o empresa y lo aremos realidad</p>
                <ul className='box__contac'>
                    <li className='info__contac'>
                        <h3>Phone:</h3>
                        <i className='bx bxs-phone-call'></i>
                        <p>+504 97354802</p>
                    </li>
                    <li className='info__contac'>
                        <h3>Email :</h3>
                        <i className='bx bx-envelope' ></i>
                        <p>hernanconce1213@gmail</p>
                    </li>
                    <li className='info__contac'>
                        <h3>Addres :</h3>
                        <i className='bx bx-current-location' ></i>
                        <p>Honduras, Tegucigalpa</p>
                    </li>
                    <li className='info__contac'>
                        <h3>Linkeding</h3>
                        <i className='bx bxl-linkedin-square' ></i>
                        <p>https://www.linkedin.com/in/hernan-martinez-04713b249/</p>
                    </li>
                </ul>
            </article>

           

        </div>
    )
}

export default Contact