import React from "react";

interface ButtonProps {
  label?: string;
  iconSrc?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary"; // primary for purple button, secondary for outlined buttons
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconSrc,
  onClick,
  variant = "secondary",
}) => {
  const baseClasses =
    "flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-300";
  const primaryClasses = "bg-purple-600 text-white hover:bg-purple-700";
  const secondaryClasses =
    "border border-purple-600 text-purple-600 hover:bg-purple-100";

  return (
    <button
      className={`${baseClasses} ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={label} className="" />}
      {label}
    </button>
  );
};

export default Button;
