import React from 'react'
import { Link } from 'react-router-dom'
import stylesnavBar from'../components/styles/stylesnavBar.css'
const Navbar = () => {
  return (
    <nav className='Navbar__contain nav__box-links ul__links-contain'>
        <Link className='nav-links' to="/">Home</Link>
        <Link className='nav-links' to="/Abaut">About</Link>
        <Link className='nav-links' to="/Services">Services</Link>
        <Link className='nav-links' to="/Contact">Contact</Link>
        <Link className='nav-links' to="/Proyectos">Proyectos</Link>
        </nav>
      
  )
}

export default Navbar