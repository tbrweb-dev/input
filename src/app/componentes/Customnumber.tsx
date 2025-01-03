'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnamediv: string;
  classnamelabel: string;
  classnameinput: string;
  initialvalue?: number;
  id: string;
  register: UseFormRegister<any>;
}

const InputNumber: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnamediv,
  classnamelabel,
  classnameinput,
  initialvalue,
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
          value={initialvalue}
          type="number"
          className={classnameinput}
          {...rest}
          {...register(label, {
            maxLength: {
              value: 30,
              message: 'tamanho maximo de 30 numeros.',
            },
          })}
        />
      </div>
    </>
  );
};

export { InputNumber };
