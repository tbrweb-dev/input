import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputSelectGroupProps {
  label: string; // Label for the select dropdown
  options: string[]; // Options to be displayed in the dropdown
  register: UseFormRegister<any>;
  name: string; // The name field used to register the input with React Hook Form
  multiple?: boolean; // Option to allow multiple selections
}

const InputSelectGroup: React.FC<InputSelectGroupProps> = ({
  label,
  options,
  register,
  name,
  multiple = false, // Default to false if not provided
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
      {...rest}
        id={name}
        {...register(name)}
        multiple={multiple} // Allow multiple selections if true
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelectGroup;
