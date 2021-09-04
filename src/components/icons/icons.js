import React from 'react';
import './icons.styles.scss';

import { ReactComponent as View } from '../../assets/view.svg';
import { ReactComponent as Wifi } from '../../assets/wifi.svg';
import { ReactComponent as Bus } from '../../assets/bus.svg';
import { ReactComponent as Car } from '../../assets/car.svg';
import { ReactComponent as Plane } from '../../assets/plane.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';

function Icons() {
    return (
        <div className='icons'>
          <View />
          <Wifi />
          <Bus />
          <Car />
          <Plane />
          <Clock />
        </div>
    )
}

export default Icons;
