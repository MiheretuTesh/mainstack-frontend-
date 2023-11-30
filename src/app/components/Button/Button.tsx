import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <button className="bg-black text-white rounded-full px-10 py-5">
      {children}
    </button>
  );
};

export default Button;
