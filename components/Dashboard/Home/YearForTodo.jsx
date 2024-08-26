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
    overflowX: 'hidden', // Hide horizontal scrollbar
  }),
};

const YearForTodo = ({ onYearSelect }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const generateYearOptions = () => {
    const years = [];
    for (let year = 2024; year <= 2050; year++) {
      years.push({ value: year, label: year });
    }
    return years;
  };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    if (onYearSelect) {
      onYearSelect(selectedOption ? selectedOption.value : null); 
    }
  };

  return (
    <div className='w-[10vw]'>
      <div className='absolute'>
        <Select
          value={selectedYear}
          onChange={handleChange}
          options={generateYearOptions()}
          placeholder="2024"
          components={{ DropdownIndicator }}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default YearForTodo;
