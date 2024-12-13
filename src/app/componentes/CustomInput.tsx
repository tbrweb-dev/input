'use client'



import { ErrorMessage } from "@hookform/error-message"
import { Path, useForm, UseFormRegister } from "react-hook-form"

interface IFormValues {
  "texto": string
  Date: string
  
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}


export default function InputCC({ label, register, required,...rest }: InputProps) { 
  
  const { formState: { errors } } = useForm<IFormValues>(); 
  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<input className="border-2 border-black" {...rest} {...register(label,  { required,minLength:{value: 3,
            message: "tamanho minino de 3 letras."}, maxLength: {
            value: 30,
            message: "tamanho maximo de 30 letras.",
          }, }) } />

<ErrorMessage errors={errors} name={"texto"} />





  
</div>
    
  </>

  )    } 