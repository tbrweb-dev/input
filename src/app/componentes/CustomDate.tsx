'use client';

import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputData: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnameDiv,
  classnameLabel,
  classnameInput,
  id,
  ...rest
}) => {
  const [dateVariable, setDateVariable] = useState(new Date());

  // Convert Date object to 'YYYY-MM-DD' string format for the input field
  const formattedDate = dateVariable.toISOString().split('T')[0];

  const handleDateChange = (e: {
    target: { value: string | number | Date };
  }) => {
    // When the date changes, convert the string back to a Date object
    setDateVariable(new Date(e.target.value));
  };

  return (
    <>
      <div className={classnameDiv}>
        <label htmlFor={label} className={classnameLabel}>
          {' '}
          {label}{' '}
        </label>
        <input
          className={classnameInput}
          type="date"
          {...rest}
          {...register(label, {
            value: formattedDate,
            onChange: handleDateChange,
          })}
        />
      </div>
    </>
  );
};

export { InputData };
