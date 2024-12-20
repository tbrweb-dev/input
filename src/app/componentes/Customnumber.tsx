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


export default function InputNumber({ label, register,...rest }: InputProps) { 
  

  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<input type="number" className="border-2 border-black" {...rest} {...register(label,  {  maxLength: {
            value: 30,
            message: "tamanho maximo de 30 numeros.", 
          },}) } />







  
</div>
    
  </>

  )    } 