"use client"

import React, { useState, useEffect } from 'react';
import { addDays, format, isBefore, startOfToday } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";
import cal from "./cal.css";



const Calenders = ({ onRangeChange, initialRange }) => {
  const defaultMonth = new Date();

  const defaultSelected = {
    from: defaultMonth,
    to: addDays(defaultMonth, 4)
  };

  const [range, setRange] = useState(initialRange || defaultSelected);

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange(range);
    }
  }, [range, onRangeChange]);

  // Notify parent component of the default range on mount
  useEffect(() => {
    if (initialRange) {
      setRange(initialRange);
    }
  }, [initialRange]);


        // Function to disable past dates
        const disablePastDates = (date) => {
          const today = startOfToday();
          return isBefore(date, today);
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
          onSelect={() => {}} // Disable user selection
          disabled={disablePastDates} // Disable past dates
        />
      </div>
    </>
  );
}

export default Calenders;
