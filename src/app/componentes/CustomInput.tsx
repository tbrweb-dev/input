'use client'




import { Path, UseFormRegister } from "react-hook-form"

interface IFormValues {
  "texto": string
  Date: Date
  "number": number 
  Time:string

}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>

}


export default function InputText({ label, register,...rest }: InputProps) { 
  
 
  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<input className="border-2 border-black" {...rest} {...register(label, {
   value: 'aaaaaaaaa',
  } ) } />







  
</div>
    
  </>

  )    } 