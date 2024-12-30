'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { InputData } from './componentes/CustomDate';

import { InputText } from './componentes/CustomInput';
import { InputCheckboxGroup } from './componentes/CustomInputCheck';
import { InputNumber } from './componentes/CustomNumber';

import { MultiSelectInput } from './componentes/CustomSelect2';
import { InputTime } from './componentes/CustomTime';
import { InputTextarea } from './componentes/CustomTextarea';
import { InputSearch } from './componentes/CustomSearch';

interface IFormValues {
  texto: string;
  Date: Date;
  number: number;
  Time: string;
  checkbox: string[];
}

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

export default function Home() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const res: Date = new Date(data.Date);
    alert(JSON.stringify(data)); // Show form data as an alert
    alert(JSON.stringify(res)); // Show form data as an alert
    console.log(errors);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <InputTextarea
        initialvalue="o valor inicial "
        id="Textarea"
        label="Textarea"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto"
      />
      <InputSearch
        label="search"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-3"
      />
      <InputText
        label="texto"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-6"
      />
      <ErrorMessage errors={errors} name={'texto'} />
      <InputNumber
        label="number"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-1"
      />
      <ErrorMessage errors={errors} name={'number'} />
      <InputData
        id="date"
        label="Date"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-6"
      />
      <InputTime
        label="Time"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-6"
      />
      <InputCheckboxGroup
        label={['option1', 'option2', 'option3']}
        options={['Option 1', 'Option 2', 'Option 3 ']}
        register={register}
        name="selectedOptions1"
      />

      <h2 className="text-xl font-bold mb-4">Select Your Options</h2>

      <MultiSelectInput
        name="selectedOptions"
        control={control}
        options={options}
        placeholder="Choose multiple options"
      />

      <button className=" mx-5 my-2 px-4 rounded-xl bg-slate-400 " type="submit">
        {' '}
        enviar{' '}
      </button>
    </form>
  );
}
