'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  initialValue?: number;
  id: string;
  register: UseFormRegister<any>;
}

const InputNumber: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnameDiv,
  classnameLabel,
  classnameInput,
  initialValue,
  id,
  ...rest
}) => {
  return (
    <>
      <div className={classnameDiv}>
        <label htmlFor={label} className={classnameLabel}>
          {' '}
          {label}{' '}
        </label>
        <input
          id={id}
          value={initialValue}
          type="number"
          className={classnameInput}
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
