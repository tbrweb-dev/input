'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  initialValue?: string;
  maxValue?: number;
  minValue?: number;
  id: string;
}

const InputText: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnameDiv,
  classnameLabel,
  classnameInput,
  initialValue,
  maxValue,
  minValue,
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
          className={classnameInput}
          {...rest}
          {...register(label, {
            value: initialValue,
            maxLength: { value: maxValue, message: 'texto muito grande' },
            minLength: { value: minValue, message: 'texto muito curto' },
          })}
        />
      </div>
    </>
  );
};

export { InputText };
