'use client'

import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type SelectProps = {
  label: string;
  register: UseFormRegister<any>; // Use 'any' instead of the IFormValues type
  required: boolean;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, register, required }, ref) => (
    <>
      <label>{label}</label>
      <select {...register(label, { required })} ref={ref}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
);

Select.displayName = 'Select'; // Necessary when using forwardRef

export default Select;


