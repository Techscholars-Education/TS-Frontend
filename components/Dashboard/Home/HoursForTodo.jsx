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
const HoursForTodo = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 1; hour <= 12; hour++) {
      const time = hour < 10 ? `0${hour}` : `${hour}`;
      times.push({ value: time, label: time });
    }
    return times;
  };

  const handleChange = (selectedOption) => {
    setSelectedTime(selectedOption);
    if (onTimeSelect) {
      onTimeSelect(selectedOption.value);
    }
  };

  return (
    <div className='w-[4vw] '>
      <div className='absolute '>
        <Select
          value={selectedTime}
          onChange={handleChange}
          options={generateTimeOptions()}
          placeholder="03"
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default HoursForTodo;
