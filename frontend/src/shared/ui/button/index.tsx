import type React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}
export const Button = ({
  type = "button",
  text,
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};
