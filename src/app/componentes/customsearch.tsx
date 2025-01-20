'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  initialValue?: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputSearch: React.FC<InputCheckboxGroupProps> = ({
  label,
  register,
  classnameDiv,
  classnameLabel,
  initialValue,
  classnameInput,
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
          type="search"
          className={classnameInput}
          {...rest}
          {...register(label, {
            value: initialValue,
          })}
        />
      </div>
    </>
  );
};

export { InputSearch };
