import React from 'react';
import './rooms.styles.scss';

import { ReactComponent as Room } from '../../assets/room1.svg';
import { ReactComponent as RoomIcon } from '../../assets/roomIcons.svg';
import { ReactComponent as Vector } from '../../assets/Vector.svg';

function Rooms() {
    return (
        <div className='room-container'>
            <div className='left1'>
                <span>ECONOMY DOUBLE ROOM</span>
            </div>
                
            <div className='room-img'>
                <Room />
            <div className='middle-section'>                   
                <ul>
                    <li>
                        <option>Shared Bathroom</option>
                    </li>
                    <li>
                        <option>Budget Friendly</option>
                    </li>
                    <li>
                        <option>Cozy Room</option>
                    </li>
                    <li>
                        <option>Free Fast Wifi</option>
                    </li>
                    <li>
                        <option>14 day cancellation</option>
                    </li>
                </ul>
                <span className='more-white-space'></span>
                <RoomIcon />
            </div>
            <div className='room-booking'>
                <div className='room-pernight'>
                    <p className='p1'>$ 72</p>
                    <p className='p2'>per night</p>
                    <p className='p3'>14 day cancellation</p>
                </div>
                <div className='room-clicks'>
                    <button className='bttn-1'>Quantity<span className='btn-space'></span><Vector /></button>
                    <button className='bttn-2'>Guests<span className='btn-space'></span><Vector /></button>
                    <button className='bttn-3'>BOOK</button>
                </div>
            </div>

            </div>        
        </div>
    )
}

export default Rooms;
