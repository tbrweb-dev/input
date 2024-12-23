import React from 'react';
import { UseFormRegister, FieldErrors, Controller } from 'react-hook-form';
import Select from 'react-select';

interface InputSelectGroupProps {
  label: string; // Label for the input
  options: string[]; // Options to be displayed in the select dropdown
  register: UseFormRegister<any>;
  name: string; // The name field used to register the input with React Hook Form
  multiple?: boolean; // Option to allow multiple selections (react-select handles this)
  errors?: FieldErrors; // Validation errors
}

const InputSelectGroup: React.FC<InputSelectGroupProps> = ({
  label,
  options,
  register,
  name,
  multiple = false,
  errors,
  ...rest
}) => {
  // Convert options into the format that `react-select` expects
  const selectOptions = options.map(option => ({ value: option, label: option }));

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {/* Use Controller to wrap the react-select for proper react-hook-form integration */}
      <Controller
        name={name}
        control={register}
        rules={{
          validate: value => value && value.length > 0 ? true : 'Please select a valid option'
        }}
        render={({ field }) => (
          <Select
            {...field}
            {...rest}
            isMulti={multiple}  // Enable multi-select if the `multiple` prop is true
            options={selectOptions}  // Pass options to react-select
            getOptionLabel={(e) => e.label}  // Ensure react-select uses label for the dropdown
            getOptionValue={(e) => e.value}  // Use `value` for the internal value of the select
          />
        )}
      />
      
      {/* Display error message if validation fails */}
      {errors && errors[name] && (
        <p style={{ color: 'red', fontSize: '12px' }}>
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default InputSelectGroup;
