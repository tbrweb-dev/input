'use client';
import React from 'react';
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

interface IFormValues {
  texto: string;
  Data: Date;
  numero: number;
  pesquisa: string;
  areadetexto: string;
  pesquisacaixa: string[];
  selecioneopcoes: string[];
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
    const res: Date = new Date(data.Data);
    alert(JSON.stringify(data)); // Show form data as an alert
    alert(JSON.stringify(res)); // Show form data as an alert
    console.log(errors);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <InputTextarea
        id="areadetexto"
        label="areadetexto"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle    w-1/4 rounded-lg "
        classnameinput="border-2 border-black  px-5"
        classnamelabel="my-auto"
        maxvalue={10}
      />
      <ErrorMessage errors={errors} name={'areadetexto'} />
      <InputSearch
        id="pesquisa"
        label="pesquisa"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle  bg-slate-400  w-1/4 rounded-lg "
        classnameinput="border-2 border-black  px-5"
        classnamelabel="my-auto"
      />
      <InputText
        id="texto"
        label="texto"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-6"
        maxvalue={5}
      />
      <ErrorMessage errors={errors} name={'texto'} />
      <InputNumber
        id="numero"
        label="numero"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-1"
      />

      <InputData
        id="data"
        label="Data"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-6"
      />
      <InputTime
        id="Tempo"
        label="Tempo"
        register={register}
        classnamediv="p-5 m-5  flex gap-4 align-middle "
        classnameinput="border-2 border-black px-5"
        classnamelabel="my-auto mr-2"
      />
      <InputCheckboxGroup
        label={['opção 1', 'opção 2', 'opção 3']}
        options={['opção 1', 'opção 2', 'opção 3']}
        register={register}
        name="pesquisacaixa"
        classnamediv="p-5 m-5  flex gap-4 align-middle  bg-slate-400  w-1/4 rounded-lg flex flex-col "
        classnameinput="border-2 border-black  px-5 gap-2"
        classnamelabel="my-auto m-2"
      />

      <MultiSelectInput
        name="selecioneopcoes"
        control={control}
        options={options}
        classnamediv="mt-5 mb-2 ml-5 pl-5  flex gap-4 align-middle "
        classnameinput="mt-5 mb-2 ml-5 pl-5 border p-2 rounded-lg flex flex-wrap gap-2 items-center bg-white"
        classnamelabel="block text-lg font-medium"
        initialvalue="Escolha multiplas opções "
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
        onClick={() => setValue('areadetexto', 'valor atualizado')}
        className="mx-5 my-2 px-4 rounded-xl bg-blue-400"
      >
        Set Value
      </button>
    </form>
  );
}
