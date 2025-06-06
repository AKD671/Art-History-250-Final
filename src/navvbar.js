import React, {useState} from 'react'
import './navbar.css'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imagelogo from './img/logo.png'

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className='navbar'>
            <div className='nav-brand'>
                <img className='navbar-logo' src={imagelogo}/></div>
            <button className="nav-toggle" onClick={() => setOpen(!open)}> <FaBars/></button>
            <ul className={`nav-links ${open ? 'show' : ''}`}>
                <li><a><Link to={'/' }>Home</Link></a></li>
                <li><a><Link to={'/Catalog' }>Catalog</Link></a></li>
                <li><a><Link to={'/About' }>About</Link></a></li>
                <li><a><Link to={'/Contact' }>Contact</Link></a></li>
                            
            </ul>
        </nav>
    );
}