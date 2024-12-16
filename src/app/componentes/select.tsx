'use client'

import { ErrorMessage } from "@hookform/error-message"
import { Path, useForm, UseFormRegister } from "react-hook-form"
import React, { forwardRef } from "react"

interface IFormValues {
  "texto": string
  Date: string
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>

}

const InputC = forwardRef<HTMLInputElement, InputProps>(
  ({ label, register, ...rest }: InputProps, ref) => {
    const { formState: { errors } } = useForm<IFormValues>();

    return (
      <>
        <div className="m-4 p-4">
          <label>{label}</label>
          <input
            className="border-2 border-black"
            {...rest}
            {...register(label, {
              
              minLength: { value: 3, message: "tamanho minino de 3 letras." },
              maxLength: { value: 30, message: "tamanho maximo de 30 letras." },
            })}
            ref={ref} // Pass the ref here
          />
          <ErrorMessage errors={errors} name={label} />
        </div>
      </>
    );
  }
);

InputC.displayName = "InputC"; // Optional: setting displayName for debugging

export default InputC;