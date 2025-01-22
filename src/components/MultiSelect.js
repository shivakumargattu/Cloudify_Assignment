// MultiSelect.js
import React from 'react';
import CreatableSelect from 'react-select/creatable';

const MultiSelect = ({ options, value, onChange, onCreateOption }) => (
  <CreatableSelect
    isMulti
    options={options}
    value={value}
    onChange={onChange}
    onCreateOption={onCreateOption}
    placeholder="Select or create options"
  />
);

export default MultiSelect;
