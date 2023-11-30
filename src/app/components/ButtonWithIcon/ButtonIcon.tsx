"use client";
import React, { forwardRef } from "react";

interface ButtonWithIconProps {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = (
  { onClick, variant = "primary", icon, children, active = false },
  ref
) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
        variant === "primary" ? "border-blue-500" : "border-gray-500"
      } ${active ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {icon && (
        <span className={`${active ? "text-white" : "text-black"}`}>
          {icon}
        </span>
      )}
      <span className={`${active ? "text-white" : "text-black"}`}>
        {children}
      </span>
    </button>
  );
};

export default forwardRef(ButtonWithIcon);
