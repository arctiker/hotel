import './datePicker.styles.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg';



import nature3 from '../../assets/nature3.jpg';

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
      <div className='left'>
          <span>BEST PRICE GUARANTEED</span>
      </div>
      <div className='container-innerpicker'>
          <label>Check-In</label>
          <DatePicker
          className='date-picker'
          dateFormat="dd/MM/yyyy"
          placeholderText='Day/Month/Year'
          selected={selectDate}
          onChange={date => setSelectDate(date)}
          />
          <label>Check-Out</label>
          <DatePicker
          className='date-picker'
          dateFormat="dd/MM/yyyy"
          placeholderText='Day/Month/Year'
          selected={optionDate}
          onChange={date => setOptionDate(date)}
          />

           <label>Nights</label>
        <div className='spinner'>
            <span onClick={handleDecrement} style={Styles.style1}>
              <LeftArrow />
            </span>
            <h5>{count}</h5>
            <span onClick={handleIncrement} style={Styles.style1}>
              <RightArrow />
            </span>
        </div>
          <button className='search-btn'>
              Search
          </button>
          </div>
    </div>
  );
}

export default Date;