'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  id: string;
  initialvalue?: string;
  maxvalue?: number;
  minvalue?: number;
}

const InputTextarea: React.FC<InputCheckboxGroupProps> = ({
  label,
  classnamediv,
  classnamelabel,
  classnameinput,
  initialvalue,
  maxvalue,
  minvalue,
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

export { InputTextarea };
