"use client";

import clsx from "clsx";

interface InputProps {
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (str: any) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  disabled,
  value,
  onChange,
}) => {
  return (
    <>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={clsx(
            `
            w-full
            rounded-md
            p-2
            ring-1
            ring-inset
            ring-[#828282]
            border
            bg-transparent 
            placeholder:text-[#555]
            text-[#555]
            opacity-50
`,
            disabled && "cursor-default bg-transparent  "
          )}
        />
      </div>
    </>
  );
};

export default Input;
