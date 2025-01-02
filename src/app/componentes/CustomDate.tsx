'use client';

import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputData: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnamediv,
  classnamelabel,
  classnameinput,
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
      <div className={classnamediv}>
        <label htmlFor={label} className={classnamelabel}>
          {' '}
          {label}{' '}
        </label>
        <input
          className={classnameinput}
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
