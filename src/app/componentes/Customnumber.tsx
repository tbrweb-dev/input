'use client'




import { UseFormRegister } from "react-hook-form"

interface InputCheckboxGroupProps {
  label: string;
  register: UseFormRegister<any>;
}

const InputNumber: React.FC<InputCheckboxGroupProps> = ({ label, register,...rest}) => {
  


  
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

  export default InputNumber