"use client";

import clsx from "clsx";
import { useFonts } from "providers/FontProvider";

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
  const fonts = useFonts();
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
            px-5
            ring-1
            ring-inset
            ring-[#929292]/50
            outline-none
            bg-transparent 
            placeholder:text-[#929292]
            text-[#929292]/60
`,
            disabled && "cursor-default bg-transparent opacity-50"
          )}
          style={{ fontFamily: `${fonts.ct}` }}
        />
      </div>
    </>
  );
};

export default Input;
