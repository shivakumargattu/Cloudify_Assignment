
import React from 'react';
import Select from 'react-select';

const SingleSelect = ({ options, value, onChange }) => (
  <Select
    options={options}
    value={value}
    onChange={onChange}
    isClearable
    placeholder="Select an option"
  />
);

export default SingleSelect;
