'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string[];
  options: string[];
  register: UseFormRegister<any>;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  name: string;
}

const InputCheckboxGroup: React.FC<InputCheckboxGroupProps> = ({
  label,
  options,
  classnamediv,
  classnamelabel,
  classnameinput,
  register,

  name,
  ...rest
}) => {
  return (
    <div>
      <div className={classnamediv}>
        {options.map((option, index) => (
          <div key={option}>
            <label htmlFor={label[index]} className={classnamelabel}>
              {option}
            </label>
            <input
              {...rest}
              className={classnameinput}
              type="checkbox"
              id={label[index]}
              value={option}
              {...register(name)} // Register all options under the same name
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { InputCheckboxGroup };
