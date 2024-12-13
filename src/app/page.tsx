'use client'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputCC from './componentes/CustomInput';
import InputData from './componentes/customdata';
import { ErrorMessage } from '@hookform/error-message';



interface IFormValues {
   "texto": string
   Date: string
  
}





export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>(); 

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data)); // Show form data as an alert
    console.log(errors);
  };
  
  return (


    <form onSubmit={handleSubmit(onSubmit)}>
    <InputCC label="texto" register={register} required />
    <ErrorMessage errors={errors} name={"texto"} />
    <InputData label="Date" register={register} /> 
    {/* <InputNar0n  name="firstName" type="text" {...register('firstName')} /> */}


    

    <input className='px-4' type="submit" />

    
  </form>

  )
}
