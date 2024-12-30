'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  id: string;
  setValueAs?: string;
  initialvalue: string;
}

const InputTextarea: React.FC<InputCheckboxGroupProps> = ({
  label,
  classnamediv,
  classnamelabel,
  classnameinput,
  initialvalue,
  setValueAs,
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
        <textarea
          id={id}
          className={classnameinput}
          {...rest}
          {...register(id, {
            value: initialvalue,
          })}
        />
      </div>
    </>
  );
};

export { InputTextarea };
