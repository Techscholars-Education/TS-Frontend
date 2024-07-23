"use client"

import React, { useState } from 'react';
import { addDays, format, isBefore, startOfToday } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";
import cal from "./cal.css"

const Calenders = ({ onRangeChange }) => {
    const defaultMonth = new Date();
  

    const defaultSelected = {
      from: defaultMonth,
      to: addDays(defaultMonth, 4)
    };
  
    const [range, setRange] = useState(defaultSelected);
  
    // Function to disable past dates
    const disablePastDates = (date) => {
      const today = startOfToday();
      return isBefore(date, today);
    };
  
    // Function to handle range selection
    const handleSelect = (selectedRange) => {
      setRange(selectedRange);
      if (onRangeChange) {
        onRangeChange(selectedRange);
      }
    };

  return (
    <>
    <div className="calendar-container">
      <div id='borders'></div>
      <DayPicker
        className={cal}
        mode="range"
        defaultMonth={defaultMonth}
        selected={range}
        onSelect={handleSelect} // Handle selection change
        disabled={disablePastDates} // Disable past dates
      />
   
    </div>
  </>

  )
}

export default Calenders


