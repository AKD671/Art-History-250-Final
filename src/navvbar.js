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
                <li><a><Link to={'/' }>Exhibition Home Page</Link></a></li>
        
                <li><a><Link to={'/Catalog' }>Longer Catalog Entry</Link></a></li>
                <li><a><Link to={'/About' }>About and Contact</Link></a></li>
            </ul>
        </nav>
    );
}