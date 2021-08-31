import React from 'react'
import './homepage.styles.scss';
import nature3 from '../../assets/nature3.jpg';
import Date from '../datePicker/datePicker';


function Homepage() {
    return (
        <div>
            <div className='left'><h1>BEST PRICE GUARANTEED</h1></div>
            <img src={nature3} alt='nature'/>
            <Date />
        </div>
        
    )
}

export default Homepage;