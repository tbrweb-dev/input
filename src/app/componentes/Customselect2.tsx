import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

type OptionType = {
  label: string;
  value: string;
};

interface MultiSelectInputProps {
  name: string;
  control: any;
  options: OptionType[];
  placeholder?: string;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  name,
  control,
  options,
  placeholder = 'Select or type to create',
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle adding/removing options
  const handleSelectOption = (option: OptionType, selectedOptions: OptionType[]) => {
    const isSelected = selectedOptions.some((selected) => selected.value === option.value);
    if (isSelected) {
      return selectedOptions.filter((selected) => selected.value !== option.value);
    } else {
      return [...selectedOptions, option];
    }
  };

  const handleDeleteOption = (value: string, selectedOptions: OptionType[]) => {
    return selectedOptions.filter((option) => option.value !== value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim()) {
      setIsDropdownOpen(true); // Show dropdown if user types
    } else {
      setIsDropdownOpen(false); // Hide dropdown if input is empty
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 200); // Delay hiding dropdown
  };

  return (
    <div className="relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          // Update form value whenever the selected options change
          const selectedOptions = field.value || [];

          // Update field value when selecting or removing options
          const handleChange = (newSelectedOptions: OptionType[]) => {
            field.onChange(newSelectedOptions); // Update the form with the selected options
          };

          return (
            <div>
              <div className="mb-2">
                <label htmlFor={name} className="block text-lg font-medium">
                  {placeholder}
                </label>
              </div>

              <div className="border p-2 rounded-lg flex flex-wrap gap-2 items-center bg-white">
                {selectedOptions.map((option) => (
                  <div key={option.value} className="flex items-center bg-gray-200 p-1 rounded-md">
                    <span>{option.label}</span>
                    <button
                      type="button"
                      onClick={() => handleChange(handleDeleteOption(option.value, selectedOptions))}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  className="border-none outline-none flex-1"
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim()) {
                      const newOption = { label: inputValue, value: inputValue.toLowerCase() };
                      handleChange(handleSelectOption(newOption, selectedOptions));
                      setInputValue(''); // Clear input after selecting
                    }
                  }}
                />
              </div>

              {/* Dropdown with filtered options */}
              {isDropdownOpen && inputValue.trim() && (
                <div className="absolute z-10 w-full bg-white border mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  <ul className="py-1">
                    {options
                      .filter((option) =>
                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                      )
                      .map((option) => (
                        <li
                          key={option.value}
                          className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                          onClick={() => {
                            handleChange(handleSelectOption(option, selectedOptions));
                            setInputValue('');
                            setIsDropdownOpen(false); // Close dropdown after selection
                          }}
                        >
                          {option.label}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default MultiSelectInput;
