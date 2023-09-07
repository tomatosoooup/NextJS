"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
  flex 
  justify-center
  rounded-md
  px-6 
  py-3 
  bg-gradient-to-r 
  from-[#D9D9D917] 
  to-[#D9D9D917] 
  shadow-sm 
  shadow-[#D9D9D917]
  `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
