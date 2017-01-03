import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Select = ({value, handleChange, uniqueCompanies})=> {
  console.log('uniqueCompany',uniqueCompanies);
  return (
    <SelectField
      floatingLabelText="AIRLINE"
      value={value}
      onChange={handleChange}
    >
      {uniqueCompanies.map((company, i) =>
        <MenuItem key={i}
                  value={company}
                  primaryText={company}
        />)
      }
    </SelectField>
  );

};
export default Select;


