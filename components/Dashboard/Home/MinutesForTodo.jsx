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

const MinutesForTodo = ({ onMinuteSelect }) => {
  const [selectedMinute, setSelectedMinute] = useState(null);

  const generateMinuteOptions = () => {
    const minutes = [];
    for (let minute = 0; minute < 60; minute++) {
      const time = minute < 10 ? `0${minute}` : `${minute}`;
      minutes.push({ value: time, label: time });
    }
    return minutes;
  };

  const handleChange = (selectedOption) => {
    setSelectedMinute(selectedOption);
    if (onMinuteSelect) {
      onMinuteSelect(selectedOption.value);
    }
  };

  return (
    <div className='w-[4vw]'>
      <div className='absolute'>
        <Select
          value={selectedMinute}
          onChange={handleChange}
          options={generateMinuteOptions()}
          placeholder="30"
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default MinutesForTodo;
