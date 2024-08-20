"use client";
import React, { useState } from 'react';
import Select from 'react-select';
import { FiChevronDown } from 'react-icons/fi';

const DropdownIndicator = (props) => (
  <div {...props.innerProps} className="custom-dropdown-icon">
    <FiChevronDown size={20} className='mr-4' />
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: '8px',
  }),
  placeholder: (provided) => ({
    ...provided,
    marginLeft: '8px',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '0px',
    maxHeight: '200px',
    overflowY: 'auto',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 8px',
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '200px',
    paddingRight: '10px',
  }),
};

const DaysForTodo = ({ onDaySelect }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const generateDayOptions = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      const dayLabel = day < 10 ? `0${day}` : `${day}`;
      days.push({ value: day, label: dayLabel });
    }
    return days;
  };

  const handleChange = (selectedOption) => {
    setSelectedDay(selectedOption);
    if (onDaySelect) {
      onDaySelect(selectedOption ? selectedOption.value : null); 
    }
  };

  return (
    <div className='w-[10vw]'>
      <div className='absolute'>
        <Select
          value={selectedDay}
          onChange={handleChange}
          options={generateDayOptions()}
          placeholder="15"
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default DaysForTodo;
