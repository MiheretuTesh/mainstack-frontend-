"use client";
import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface ButtonWithIconProps {
  onClick?: () => void;
  variant?: "primary";
  icon: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
}

const ButtonWithIcon2: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonWithIconProps
> = ({ onClick, variant = "primary", icon, children, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full flex items-center space-x-2 bg-EFF1F6 text-black`}
      style={{ backgroundColor: "#EFF1F6" }}
    >
      <span className="text-black text-md font-bold">{children}</span>
      {icon && <span className={`text-black"`}>{icon}</span>}
    </button>
  );
};

export default forwardRef(ButtonWithIcon2);
