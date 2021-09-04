import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/frame.svg';


function Header() {
    return (
<div>
            <div className='logo'>
                <Logo />
            </div>
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
