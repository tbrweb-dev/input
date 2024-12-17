'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputData from './componentes/customdata';
import { ErrorMessage } from '@hookform/error-message';
import InputText from './componentes/CustomInput';
import InputNumber from './componentes/Customnumber';
import InputTime from './componentes/Customtime';



interface IFormValues {
   "texto": string
   Date: string
   "number": number 
   Time:string
  
}





export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>({
    criteriaMode: "all",
  }); 

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data)); // Show form data as an alert
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
    
    {/* <InputNar0n  name="firstName" type="text" {...register('firstName')} /> */}


    

    <input className='px-4' type="submit" />

    
  </form>

  )
}
