'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  id: string;
  initialValue?: string;
  maxValue?: number;
  minValue?: number;
}

const InputTextarea: React.FC<InputCheckboxGroupProps> = ({
  label,
  classnameDiv,
  classnameLabel,
  classnameInput,
  initialValue,
  maxValue,
  minValue,
  id,
  register,
  ...rest
}) => {
  return (
    <>
      <div className={classnameDiv}>
        <label htmlFor={label} className={classnameLabel}>
          {' '}
          {label}{' '}
        </label>
        <textarea
          id={id}
          className={classnameInput}
          {...rest}
          {...register(label, {
            value: initialValue,
            maxLength: {
              value: maxValue,
              message: 'area de texto muito grande',
            },
            minLength: {
              value: minValue,
              message: 'area de texto muito curto',
            },
          })}
        />
      </div>
    </>
  );
};

export { InputTextarea };
