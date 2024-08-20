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
    overflowX: 'hidden', 
  }),
};

const MonthsForTodo = ({ onMonthSelect }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const generateMonthOptions = () => {
    const months = [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' }
    ];
    return months;
  };

  const handleChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    if (onMonthSelect) {
      onMonthSelect(selectedOption ? selectedOption.value : null); 
    }
  };

  return (
    <div className='w-[10vw]'>
      <div className='absolute'>
        <Select
          value={selectedMonth}
          onChange={handleChange}
          options={generateMonthOptions()}
          placeholder="July"
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default MonthsForTodo;
