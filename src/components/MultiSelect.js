import React, { useState } from 'react';
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';


const Option = (props) => {
  return (
    <components.Option {...props}>
      <input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
      />{' '}
      <label>{props.label}</label>
    </components.Option>
  );
};


const Menu = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue.trim() === '') return;

    const newOption = { value: inputValue.toLowerCase(), label: inputValue };
    props.selectProps.onCreateOption(inputValue); 
    setInputValue('');
  };

  return (
    <components.Menu {...props}>
      {props.children}
      <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new item"
          style={{ width: '70%', padding: '5px', marginRight: '5px' }}
        />
        <button
          onClick={handleAddClick}
          
        >
         + Add
        </button>
      </div>
    </components.Menu>
  );
};

const MultiSelectDropdown = () => {
  const [options, setOptions] = useState([
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected || []);
  };

  const handleCreate = (inputValue) => {
    const newOption = { value: inputValue.toLowerCase(), label: inputValue };
    setOptions((prevOptions) => [...prevOptions, newOption]);
    setSelectedOptions((prevSelected) => [...prevSelected, newOption]);
  };

  return (
    <CreatableSelect
      components={{ Option, Menu }}
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      onCreateOption={handleCreate}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      placeholder="Select or create options..."
    />
  );
};

export default MultiSelectDropdown;