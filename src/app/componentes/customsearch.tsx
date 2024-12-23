'use client'




import {  UseFormRegister } from "react-hook-form"

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
}

const InputSearch: React.FC<InputCheckboxGroupProps> = ({ label, register,...rest}) => {
  
 
  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<input type="search" className="border-2 border-black" {...rest} {...register(label, {
   value: 'area de pesquisa',
  } ) } />







  
</div>
    
  </>

  )    } 

  export default InputSearch