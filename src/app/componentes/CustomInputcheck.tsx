import React from 'react';
import { UseFormRegister } from 'react-hook-form';




interface InputCheckboxGroupProps {
  label: string[];
  options: string[];
  register: UseFormRegister<any>;
  name: string;
}

const InputCheckboxGroup: React.FC<InputCheckboxGroupProps> = ({ label, options, register, name }) => {
  return (
    <div>
      <div>
        {options.map((option,index) => (
          <div key={option}>
            <label htmlFor={label[index]}>{option}</label>
            <input 
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

export default InputCheckboxGroup;