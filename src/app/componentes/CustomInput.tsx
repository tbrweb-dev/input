'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
}

const InputText: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnamediv,
  classnamelabel,
  classnameinput,
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
          className={classnameinput}
          {...rest}
          {...register(label, {
            value: 'aaaaaaaaa',
          })}
        />
      </div>
    </>
  );
};

export { InputText };
