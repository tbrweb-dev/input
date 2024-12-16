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


export default function InputTime({ label, register,...rest }: InputProps) { 
  

  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<label className="m-4"></label>
    <input type="time"{...rest} {...register(label,)} />






  
</div>
    
  </>

  )    } 