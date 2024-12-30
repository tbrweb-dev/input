import { InputHTMLAttributes } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'date';
  name: string;
  error?: string;
}

export function InputNar0n({ type = 'text', ...rest }: InputProps) {
  if (type === 'number') {
  }
  return (
    <div>
      <label htmlFor={name}></label>
      <input id={name} type={type} className="" {...rest} />
    </div>
  );
}
