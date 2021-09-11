import './datePicker.styles.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

import { ReactComponent as Vector } from '../../assets/Vector.svg';
import * as moment from 'moment';
import * as Styles from '../svg-style';

function Dates() {
  let newDate = moment(new Date()).format('YYYY-MM-DD')

  const [checkInDate, setCheckInDate] = useState(newDate);
  const [checkOutDate, setCheckOuteDate] = useState(newDate);
  const [count, setCount] = useState(0);

  const newCheckIn = new Date(checkInDate)
  const newChekOut = new Date(checkOutDate)

  let timeDifference =  newChekOut.getTime() - newCheckIn.getTime();
  let oldDayDifference = timeDifference / (1000 * 3600 * 24);
  let dayDifference = Math.round(oldDayDifference);

  const handleIncrement = () => {
    setCount(count => count + 1);
  };

  return (
    <div className='container-datepicker'>
      <span className='left'>BEST PRICE GUARANTEED</span>
      <div className='container-innerpicker'>
        <div className='sub-innerpicker'>
        <label>Check-In</label>
          <input
          className='date-picker'
          type='date'
          selected={checkInDate}
          onChange={(event) => {setCheckInDate(event.target.value)}}
          />
        </div>

        <div className='sub-innerpicker'>
        <label>Check-Out</label>
          <input
          className='date-picker'
          type='date'
          selected={checkOutDate}
          onChange={(event) => {setCheckOuteDate(event.target.value)}}
          />
        </div>

        <div className='sub-innerpicker'>
        <label>Nights</label>
          <div className='spinner'>
            <h5 className='space'>{dayDifference}</h5>
            <span onClick={handleIncrement} style={Styles.style1}>
              <Vector />
            </span>
          </div >
           </div>
          <button className='search-btn'>
              Search
          </button>
        </div>
    </div>
  );
}

export default Dates;