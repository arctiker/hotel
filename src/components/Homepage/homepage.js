import React from 'react'

import './homepage.styles.scss';

import Dates from '../datePicker/datePicker';
import Icons from '../icons/icons';
import Header from '../header/header';
import Rooms from '../rooms/rooms';
import Footer from '../footer/footer';




function Homepage() {
    return (
        <div className='hompage-container'>
            <Header />
            <Dates />
            <Icons />
            <Rooms />
            <Footer />
            <div>
                <h1>Hello World</h1>
            </div>
        </div>
        
    )
}

export default Homepage;