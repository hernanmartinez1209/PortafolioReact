import React from 'react'
import stylesHeader from'../components/styles/stylesHeader.css'
const Header = () => {
    return (
        <div className='Hedaer'>
            <h2>Hola</h2>
            <h1>Soy diseñador web Front-end</h1>
            <img className='Headaer__img' src="./imgs/fotoPersonal.jpeg" alt="Photo__personal" />
            <p className='p__Header' >!Ven y Creemos sitios espectaculares Contactame!</p>
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
                <img className='iconTalwin' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAORJREFUSEvtlGENwjAUhL8pAAk4AAeAAoIDcIADkAAOkIAEJOAAcIAEckm3kKbdLWuW8GNLmi1pe9+711srBn6qgfUZAbbDf9GiGXAEVoC+P8A9jIuz4BxMgSegd+q5AfsATS5wgHOo+hEgO2ASKWluHUHkVi5tTJuFQVROtHEeQdS2a4AsgDdw6AJI2RZErVlm2iZxQQS1DtrOUBXKoYbaJmG5OwGvemN8BkWJSVXzC3CJUXXbtsQ4QHFiHKA4MQ6QS4zit+mSmD6Aek+nxJQA3JWTnXdXRW/h3H9QLBgLjA5sS7//4zIZE1beCQAAAABJRU5ErkJggg=="/>
                <img className='donwIncon' src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt=""  width={"39px"}/>
                <img className='iconTalwin' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARBJREFUSEu9leERwUAUhL9UgA50QAlUQAd0gAoogQrQgQ7QARXQASpg1lxM5s0lcXHxZvIr83Zv9+29S6i5kprx+TtBE1gDw4rKNsAMuKf9VsEOGFQET9u2wDiP4PkjuNp1+ladBML+OGMt8inIC0IbkKUdj+pgAoGNMkCyYQUoFLcYBD1gb4D6wAEoVP2tRZbgAXQd4SWGAlmRAgrv6tIiBVFmIAILdHSkImkYFcFD9s1AQ54CS2BSB4EUiHgBzGMTnN06OAHaP9kIR7toAtLO0XK0FTQDWWBLidKnC+irIILQ/ac7otS9y140n5+hBIXrWsyKnR4cm+0yIp1cy0/RzX1wykCC///9TQ4+YVnDC5ARNhmik9p/AAAAAElFTkSuQmCC"/>
                <li><i className="icon_tecnologiH bx bxl-css3"></i></li>
                <li><i className="icon_tecnologiH bx bxl-javascript"></i></li>
                <li><i className="icon_tecnologiH bx bxl-redux"></i></li>
                <li><i className="icon_tecnologiH icon_header fa-brands fa-github"></i></li>
            </ul>
        </div>
    )
}

export default Header