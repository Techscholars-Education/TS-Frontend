"use client";

import React, { useState, useEffect } from "react";
import { addDays, startOfToday, isBefore, addMonths, subMonths } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"; 
import "./cal.css"; 
import { GoChevronLeft,GoChevronRight } from "react-icons/go";

const CustomNavButton = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className={`custom-nav-button custom-nav-button-${direction} `}>
      {direction === "prev" ? <GoChevronLeft className="text-3xl" /> : <GoChevronRight className="text-3xl" />}
    </button>
  );
};

const Calenders = ({ onRangeChange, initialRange }) => {
  const defaultMonth = new Date();

  const defaultSelected = {
    from: defaultMonth,
    to: addDays(defaultMonth, 4),
  };

  const [range, setRange] = useState(initialRange || defaultSelected);
  const [month, setMonth] = useState(defaultMonth);

  useEffect(() => {
    if (onRangeChange) {
      onRangeChange(range);
    }
  }, [range, onRangeChange]);

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
        <div id="borders"></div>
        <DayPicker
          mode="range"
          defaultMonth={defaultMonth}
          month={month}
          onMonthChange={setMonth}
          selected={range}
          onSelect={() => {}} // Disable user selection
          // disabled={disablePastDates} 
        />
        <CustomNavButton direction="prev" onClick={() => setMonth(subMonths(month, 1))} />
        <CustomNavButton direction="next" onClick={() => setMonth(addMonths(month, 1))} />
      </div>
    </>
  );
};

export default Calenders;
