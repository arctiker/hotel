import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/frame.svg';


function Header() {
    return (
    <div className='header'>
        <img src={logo} alt='' className='logo' />
        
        <div className='links'>            
            <Link className='link' style={{color: 'black'}}>GALLERY</Link>
            <Link className='link' style={{color: 'black'}}>NORTHERN LIGHTS</Link>
            <Link className='link' style={{color: 'black'}}>BLOG</Link>
            <Link className='link' style={{color: 'black'}}>MAP</Link>
            <Link className='link' style={{color: 'black'}}>CONTACT</Link>
            <Link className='link' style={{color: 'black'}}>FAQ</Link>
            <select className='select'>
                <option>CURRENCY</option>
                <option>USD</option>
                <option>EURO</option>
                <option>YAN</option>
                <option>POUND</option>
            </select>
        </div>
    </div>

    );
}

export default Header;
