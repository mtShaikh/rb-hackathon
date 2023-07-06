"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  options?: any[];
}

const Select: React.FC<SelectProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  options,
}) => {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
          form-input
          block
          w-full
          rounded-md
          border-0
          py-1.5
          text-gray-900
          shadow-sm
          ring-1
          ring-inset
          ring-gray-300
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600
          sm:text-sm
          sm:leading-6
          `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default"
          )}
        >
          {options?.map((opt) => {
            return <option value={opt.id}>{opt.value}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
