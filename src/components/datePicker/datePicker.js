import './datePicker.styles.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

import { ReactComponent as Vector } from '../../assets/Vector.svg';




import * as Styles from '../svg-style';

function Date() {

  const [selectDate, setSelectDate] = useState(null);
  const [optionDate, setOptionDate] = useState(null);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count => count + 1);
  };

  const handleDecrement = () => {
    if (count < 2){setCount(count => count)}
    else {
      setCount(count => count -1);
    }
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
          dateFormat="dd/MM/yyyy"
          placeholder='Day/Month/Year'
          selected={selectDate}
          onChange={date => setSelectDate(date)}
          />
        </div>

        <div className='sub-innerpicker'>
        <label>Check-Out</label>
          <input
          className='date-picker'
          type='date'
          dateFormat="dd/MM/yyyy"
          placeholderText='Day/Month/Year'
          selected={optionDate}
          onChange={date => setOptionDate(date)}
          />
        </div>

        <div className='sub-innerpicker'>
        <label>Nights</label>
          <div className='spinner'>
            <h5>{count}</h5>
            <span className='space'></span>
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

export default Date;