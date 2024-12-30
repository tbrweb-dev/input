'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  register: UseFormRegister<any>;
}

const InputSearch: React.FC<InputCheckboxGroupProps> = ({
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
          type="search"
          className={classnameinput}
          {...rest}
          {...register(label, {
            value: 'area de pesquisa',
          })}
        />
      </div>
    </>
  );
};

export { InputSearch };
