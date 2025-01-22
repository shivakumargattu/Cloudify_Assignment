// TableComponent.js
import React, { useState } from 'react';

import "./MultiSelect";
import MultiSelect from './MultiSelect';
import SingleSelect from '../SingleSelect';


const initialOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' }
  
];

const TableComponent = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelectValue: null, multiSelectValue: [] }]);
  const [singleSelectOptions, setSingleSelectOptions] = useState(initialOptions);
  const [multiSelectOptions, setMultiSelectOptions] = useState(initialOptions);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelectValue: null, multiSelectValue: [] }]);
  };

  const handleSingleSelectChange = (selectedOption, rowId) => {
    if (selectedOption) {
      setRows(rows.map(row => 
        row.id === rowId ? { ...row, singleSelectValue: selectedOption } : row
      ));
      setSingleSelectOptions(singleSelectOptions.filter(option => option.value !== selectedOption.value));
    } else {
      // Handle the case when selectedOption is null (e.g., when the selection is cleared)
      setRows(rows.map(row => 
        row.id === rowId ? { ...row, singleSelectValue: null } : row
      ));
    }
  };
    

  const handleMultiSelectChange = (selectedOptions, rowId) => {
    setRows(rows.map(row => (row.id === rowId ? { ...row, multiSelectValue: selectedOptions } : row)));
  };

  const handleAddMultiSelectOption = newOption => {
    const newOptionObject = { value: newOption.toLowerCase(), label: newOption };
    setMultiSelectOptions([...multiSelectOptions, newOptionObject]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <SingleSelect
                  options={singleSelectOptions}
                  value={row.singleSelectValue}
                  onChange={option => handleSingleSelectChange(option, row.id)}
                />
              </td>
              <td>
                <MultiSelect
                  options={multiSelectOptions}
                  value={row.multiSelectValue}
                  onChange={options => handleMultiSelectChange(options, row.id)}
                  onCreateOption={handleAddMultiSelectOption}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add New Row</button>

    </div>
  );
};

export default TableComponent;
