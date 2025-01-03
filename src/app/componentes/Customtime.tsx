'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputTime: React.FC<InputCheckboxGroupProps> = ({
  label,
  classnamediv,
  classnamelabel,
  classnameinput,
  id,
  register,
  ...rest
}) => {
  return (
    <>
      <div className={classnamediv}>
        <label htmlFor={label} className={classnamelabel}>
          {' '}
          {label}{' '}
        </label>
        <input
          id={id}
          className={classnameinput}
          type="time"
          {...rest}
          {...register(label)}
        />
      </div>
    </>
  );
};

export { InputTime };
