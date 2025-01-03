'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  initialvalue?: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputSearch: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnamediv,
  classnamelabel,
  initialvalue,
  classnameinput,
  id,
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
          type="search"
          className={classnameinput}
          {...rest}
          {...register(label, {
            value: initialvalue,
          })}
        />
      </div>
    </>
  );
};

export { InputSearch };
