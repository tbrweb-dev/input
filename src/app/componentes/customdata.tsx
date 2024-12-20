'use client'

import { useState } from "react"
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


export default function InputData({ label, register,...rest  }: InputProps) { 
  
  const [dateVariable, setDateVariable] = useState(new Date());
  
  // Convert Date object to 'YYYY-MM-DD' string format for the input field
  const formattedDate = dateVariable.toISOString().split('T')[0];

  const handleDateChange = (e: { target: { value: string | number | Date } }) => {
    // When the date changes, convert the string back to a Date object
    setDateVariable(new Date(e.target.value));
  };
  
  return(

<>
<div className="m-4">

<label className="m-4">{label}</label>
    <input type="date"{...rest} {...register(label, {
   value: formattedDate,  onChange: handleDateChange,
  })} />


</div>
    
  </>

  )    } 