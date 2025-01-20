'use client';

import { UseFormRegister } from 'react-hook-form';

interface InputCheckboxGroupProps {
  label: string;
  classnameDiv: string;
  classnameLabel: string;
  classnameInput: string;
  id: string;
  register: UseFormRegister<any>;
}

const InputTime: React.FC<InputCheckboxGroupProps> = ({
  label,
  classnameDiv,
  classnameLabel,
  classnameInput,
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
        <input
          id={id}
          className={classnameInput}
          type="time"
          {...rest}
          {...register(label)}
        />
      </div>
    </>
  );
};

export { InputTime };
