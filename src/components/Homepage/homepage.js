import React from 'react'

import './homepage.styles.scss';
import snow from '../../assets/snow.jpg';


import Date from '../datePicker/datePicker';
import Icons from '../icons/icons';


function Homepage() {
    return (
        <div className='hompage-container'>
            <Date />
            <Icons />
        </div>
        
    )
}

export default Homepage;