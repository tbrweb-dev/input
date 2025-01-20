'use client';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { InputData } from './componentes/CustomDate';

import { InputText } from './componentes/CustomText';
import { InputCheckboxGroup } from './componentes/CustomInputCheck';
import { InputNumber } from './componentes/CustomNumber';

import { MultiSelectInput } from './componentes/CustomSelect2';
import { InputTime } from './componentes/CustomTime';
import { InputTextarea } from './componentes/CustomTextarea';
import { InputSearch } from './componentes/CustomSearch';
import { ToastContainer } from 'react-toastify';

interface IFormValues {
  text: string;
  date: Date;
  number: number;
  search: string;
  textarea: string;
  checkbox: string[];
  select: string[];
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
    setValue,
  } = useForm<IFormValues>({
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data)); // Show form data as an alert
    console.log(errors);
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <InputTextarea
          id="textarea"
          label="textarea"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle    w-1/4 rounded-lg "
          classnameInput="border-2 border-black  px-5"
          classnameLabel="my-auto"
          maxValue={10}
        />
        <div className="toast toast-end toast-middle">
          <div className="alert alert-info">
            <ErrorMessage errors={errors} name={'textarea'} />
          </div>
          <div className="alert alert-info">
            <ErrorMessage errors={errors} name={'text'} />
          </div>
        </div>

        <InputSearch
          id="search"
          label="search"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle  bg-slate-400  w-1/4 rounded-lg "
          classnameInput="border-2 border-black  px-5"
          classnameLabel="my-auto"
        />
        <InputText
          id="text"
          label="text"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle "
          classnameInput="border-2 border-black px-5"
          classnameLabel="my-auto mr-6"
          maxValue={5}
        />
        <ErrorMessage errors={errors} name={'texto'} />
        <InputNumber
          id="number"
          label="number"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle "
          classnameInput="border-2 border-black px-5"
          classnameLabel="my-auto mr-1"
        />
        <InputData
          id="date"
          label="date"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle "
          classnameInput="border-2 border-black px-5"
          classnameLabel="my-auto mr-6"
        />
        <InputTime
          id="Time"
          label="Time"
          register={register}
          classnameDiv="p-5 m-5  flex gap-4 align-middle "
          classnameInput="border-2 border-black px-5"
          classnameLabel="my-auto mr-2"
        />
        <InputCheckboxGroup
          label={['option 1', 'option 2', 'option 3']}
          options={['option 1', 'option 2', 'option 3']}
          register={register}
          name="checkbox"
          classnameDiv="p-5 m-5  flex gap-4 align-middle  bg-slate-400  w-1/4 rounded-lg flex flex-col "
          classnameInput="border-2 border-black  px-5 gap-2"
          classnameLabel="my-auto m-2"
        />
        <MultiSelectInput
          name="select"
          control={control}
          options={options}
          classnameDiv="mt-5 mb-2 ml-5 pl-5  flex gap-4 align-middle "
          classnameInput="mt-5 mb-2 ml-5 pl-5 border p-2 rounded-lg flex flex-wrap gap-2 items-center bg-white"
          classnameLabel="block text-lg font-medium"
          initialValue="Escolha multiplas opções "
        />
        <button
          className=" mx-5 my-2 px-4 rounded-xl bg-slate-400 "
          type="submit"
        >
          {' '}
          enviar normal{' '}
        </button>
        {/* SetValue button */}
        <button
          type="button"
          onClick={() => setValue('textarea', 'valor atualizado')}
          className="mx-5 my-2 px-4 rounded-xl bg-blue-400"
        >
          Set Value
        </button>
      </form>
    </>
  );
}
