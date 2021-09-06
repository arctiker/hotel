import React from 'react'

import './homepage.styles.scss';

import Date from '../datePicker/datePicker';
import Icons from '../icons/icons';
import Header from '../header/header';
import Rooms from '../rooms/rooms';




function Homepage() {
    return (
        <div className='hompage-container'>
            <Header />
            <Date />
            <Icons />
        </div>
        
    )
}

export default Homepage;