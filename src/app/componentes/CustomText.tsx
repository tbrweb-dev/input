'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  initialvalue?: string;
  maxvalue?: number;
  minvalue?: number;
  id: string;
}

const InputText: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnamediv,
  classnamelabel,
  classnameinput,
  initialvalue,
  maxvalue,
  minvalue,
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
          className={classnameinput}
          {...rest}
          {...register(label, {
            value: initialvalue,
            maxLength: { value: maxvalue, message: 'texto muito grande' },
            minLength: { value: minvalue, message: 'texto muito curto' },
          })}
        />
      </div>
    </>
  );
};

export { InputText };
