'use client'




import { UseFormRegister } from "react-hook-form"

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
}


const InputTime: React.FC<InputCheckboxGroupProps> = ({ label, register,...rest}) => {

  

  
  return(

<>

<div className="m-4 p-4"><label> {label} </label>
<label className="m-4"></label>
    <input type="time"{...rest} {...register(label, ) } />






  
</div>
    
  </>

  )    } 

  export default InputTime