'use client'
import React from 'react';
import { SubmitHandler, useForm,  } from 'react-hook-form';
import InputData from './componentes/customdata';
import { ErrorMessage } from '@hookform/error-message';
import InputText from './componentes/CustomInput';
import InputNumber from './componentes/Customnumber';
import InputTime from './componentes/Customtime';
import InputCheckboxGroup from './componentes/CustomInputcheck';
import Inputselec from './componentes/CustomInpu';
import InputSelectGroup from './componentes/CustomInpu';



interface IFormValues {
   "texto": string
   Date: Date
   "number": number 
   Time:string
  
}





export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
    criteriaMode: "all",
  }); 


  

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const res: Date = new Date(data.Date);
    alert(JSON.stringify(data)); // Show form data as an alert
    alert(JSON.stringify(res)); // Show form data as an alert
    console.log(errors);
  };
  
  return (


    <form onSubmit={handleSubmit(onSubmit)}>
    <InputText label="texto" register={register}  />
    <ErrorMessage errors={errors} name={"texto"} />
    <InputNumber label="number" register={register}  />
    <ErrorMessage errors={errors} name={"number"} />
    <InputData label="Date" register={register} /> 
    <InputTime label="Time" register={register} /> 
    <InputCheckboxGroup label={['option1', 'option2', 'option3']} options={['Option 1', 'Option 2', 'Option 3 ' ]} register={register
      } name="selectedOptions" />
    
    <InputSelectGroup
        label="Select Options"
        options={['a', 'b', 'c','d,','e','f']}
        register={register}
        name="selectedOptions" // Field name for the select input
        multiple={true} // Allow multiple selections
      />

    
    {/* <InputNar0n  name="firstName" type="text" {...register('firstName')} /> */}


    

    <input className='px-4' type="submit" />

    
  </form>

  )
}
