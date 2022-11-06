import React from 'react'
import stylesHeader from'../components/styles/stylesHeader.css'
const Header = () => {
    return (
        <div className='Hedaer'>
            <h2>hi there</h2>
            <h1>i am a Web Designer</h1>
            <img className='Headaer__img' src="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/45588434_1866201000144639_6681716786011832320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHDj1qXImNAftggk-6_zENC1_t1FJBgqVrX-3UUkGCpWq-vBEnLjnMQYFo3GjAfYgqyW9L2pXuDqAEXlXE6N-np&_nc_ohc=ofz70aWp61QAX-Lzhfp&_nc_ht=scontent.ftgu1-2.fna&oh=00_AfA2967ChfS8Dkzyp9Z3GAqjnWhA2mt5xmst1UWocx2YLw&oe=63891817" alt="Photo__personal" />
            <p className='p__Header' >!Ven y Creemos sitios expectaculares Contactame!</p>
            {/* <button className='btn__Header'>More About Me</button> */}
            <article className='box__info-header'>
                    <ul className='inf__Header'>
                        <li className='links__header'><a href="https://github.com/hernanmartinez1209"   target="blank"><i className="icon_header fa-brands fa-github"></i></a></li>
                        <li className='links__header'><a href="https://wa.me/+50497354802"   target="blank"><i className="icon_header fa-brands fa-whatsapp"></i></a></li>
                        <li className='links__header'><a href="https://www.linkedin.com/in/hernan-martinez-04713b249/"   target="blank"><i className="icon_header fa-brands fa-linkedin"></i></a></li> 
                    
                    </ul>
            </article>
        </div>
    )
}

export default Header