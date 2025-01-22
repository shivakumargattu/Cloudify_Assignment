import React, { useState } from 'react';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
import MultiSelectDropdown from './MultiSelect';

const initialOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' }
]
;

const TableComponent = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelectValue: null, multiSelectValue: [] }]);
  const [singleSelectOptions, setSingleSelectOptions] = useState(initialOptions); 

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelectValue: null, multiSelectValue: [] }]);
  };

  const handleSingleSelectChange = (selectedOption, rowId) => {
    setRows(rows.map(row =>
      row.id === rowId ? { ...row, singleSelectValue: selectedOption } : row
    ));
  };



  return (
    <div className='tableContainer'>
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
      
          <MultiSelectDropdown/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='buttonContainer'>
        <button onClick={addRow}>+ Add New Row</button>
      </div>
    </div>
  );
};

export default TableComponent;
