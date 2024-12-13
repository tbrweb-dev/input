'use client'

import { Path, UseFormRegister } from "react-hook-form"

interface IFormValues {
"texto": string
  Date: string
  "number": number 
  Time:string

}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  
}


export default function InputData({ label, register,...rest  }: InputProps) { 
  
  
  
  return(

<>
<div className="m-4">

<label className="m-4">{label}</label>
    <input type="date"{...rest} {...register(label, {  
    valueAsDate: true,
   })} />


</div>
    
  </>

  )    } 