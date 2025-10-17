import React from "react";

interface InputCheckboxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: boolean;
  className?: string;
}

export const InputCheckbox: React.FC<InputCheckboxProps> = ({
  onChange,
  label,
  value,
  className = "",
}) => {
  return (
    <label className={` ${className}`}>
      <input type="checkbox" checked={value} onChange={onChange} className="" />
      {label && <span className="">{label}</span>}
    </label>
  );
};
