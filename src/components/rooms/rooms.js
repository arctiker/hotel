import React from 'react';
import './rooms.styles.scss';

import { ReactComponent as Room } from '../../assets/room1.svg';
import { ReactComponent as RoomIcon } from '../../assets/roomIcons.svg';

function Rooms() {
    return (
        <div className='room-container'>
                <span className='left1'>ECONOMY DOUBLE ROOM</span>
            <div className='room-img'>
                <Room />
            <div>                
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
            </div>
            <div className='room-icons'>
                <RoomIcon />
            </div>
            <div className='room-booking'>
                <p>$ 72</p>
                <p>per night</p>
                <h6>14 day cancellation</h6>
                <button>Quantity</button>
                <button>Guests</button>
                <button>BOOK</button>
            </div>

            </div>        
        </div>
    )
}

export default Rooms;
