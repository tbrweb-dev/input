'use client'
import React from 'react';
import { SubmitHandler, useForm,  } from 'react-hook-form';
import InputData from './componentes/customdata';
import { ErrorMessage } from '@hookform/error-message';
import InputText from './componentes/CustomInput';
import InputNumber from './componentes/Customnumber';
import InputTime from './componentes/Customtime';
import InputCheckboxGroup from './componentes/CustomInputcheck';
import InputSearch from './componentes/customsearch';
import InputTextarea from './componentes/customtextarea';
import InputSelectGroup from './componentes/Customselect';
import MultiSelectInput from './componentes/Customselect2';




interface IFormValues {
   "texto": string
   Date: Date
   "number": number 
   Time:string
   "checkbox": string[]

}

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];



export default function Home() {

  const { register,control, handleSubmit, formState: { errors } } = useForm<IFormValues>({
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
    <InputTextarea label="Textarea" register={register}  />
    <InputSearch label="search" register={register}  />
    <InputText label="texto" register={register}  />
    <ErrorMessage errors={errors} name={"texto"} />
    <InputNumber label="number" register={register}  />
    <ErrorMessage errors={errors} name={"number"} />
    <InputData label="Date" register={register} /> 
    <InputTime label="Time" register={register} /> 
    <InputCheckboxGroup label={['option1', 'option2', 'option3']} options={['Option 1', 'Option 2', 'Option 3 ' ]} register={register
      } name="selectedOptions1" />
    
    {/* <InputSelectGroup
        label="Select Colors"
        options={['Red', 'Green', 'Blue', 'Yellow']}
        name="colors"
        control={control}  // Pass control here (not register)
        multiple={true}  // Enable multi-select
        errors={errors}  // Pass errors to display them
      /> */}



{/* <InputSelectGroup
        label="Select Colors"
        options={['Red', 'Green', 'Blue', 'Yellow']}
        name="colors"
        control={control}  // Pass control here (not register)
        multiple={true}  // Enable multi-select
        errors={errors}  // Pass errors to display them
      /> */}
    
    {/* <InputNar0n  name="firstName" type="text" {...register('firstName')} /> */}

    <h2 className="text-xl font-bold mb-4">Select Your Options</h2>

{/* MultiSelectInput component */}

<MultiSelectInput
  name="selectedOptions"
  control={control}
  options={options}
  placeholder="Choose multiple options"
/>
    

    <input className='px-4' type="submit" />

    
  </form>

  )
}
