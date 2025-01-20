'use client';

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string[];
  options: string[];
  register: UseFormRegister<any>;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  name: string;
}

const InputCheckboxGroup: React.FC<InputCheckboxGroupProps> = ({
  label,
  options,
  classnameDiv,
  classnameLabel,
  classnameInput,
  register,

  name,
  ...rest
}) => {
  return (
    <div>
      <div className={classnameDiv}>
        {options.map((option, index) => (
          <div key={option}>
            <label htmlFor={label[index]} className={classnameLabel}>
              {option}
            </label>
            <input
              {...rest}
              className={classnameInput}
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
