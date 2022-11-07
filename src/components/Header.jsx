import React from 'react'
import stylesHeader from'../components/styles/stylesHeader.css'
const Header = () => {
    return (
        <div className='Hedaer'>
            <h2>hi there</h2>
            <h1>i am a Web Designer</h1>
            <img className='Headaer__img' src="./imgs/fotoPersonal.jpeg" alt="Photo__personal" />
            <p className='p__Header' >!Ven y Creemos sitios expectaculares Contactame!</p>
            {/* <button className='btn__Header'>More About Me</button> */}
            <article className='box__info-header'>
                    <ul className='inf__Header'>
                        <li className='links__header'><a href="https://github.com/hernanmartinez1209"   target="blank"><i className="icon_header fa-brands fa-github"></i></a></li>
                        <li className='links__header'><a href="https://wa.me/+50497354802"   target="blank"><i className="icon_header fa-brands fa-whatsapp"></i></a></li>
                        <li className='links__header'><a href="https://www.linkedin.com/in/hernan-martinez-04713b249/"   target="blank"><i className="icon_header fa-brands fa-linkedin"></i></a></li> 
                    
                    </ul>
            </article>
               <h2>skills</h2>
            <ul className="contain__iconsH">
                <li><i className="icon_tecnologiH bx bxl-html5"></i></li>
                <li><i className="icon_tecnologiH bx bxl-react"></i></li>
                <li><i className="icon_tecnologiH bx bxl-css3"></i></li>
                <li><i className="icon_tecnologiH bx bxl-javascript"></i></li>
                <li><i className="icon_tecnologiH bx bxl-redux"></i></li>
                <li><i className="icon_tecnologiH icon_header fa-brands fa-github"></i></li>
            </ul>
        </div>
    )
}

export default Header