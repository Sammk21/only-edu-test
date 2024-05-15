import React, { useEffect, useImperativeHandle, useState } from "react";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  label: string;
  errors?: Record<string, unknown>;
  touched?: Record<string, unknown>;
  name: string;
  topLabel?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text");
      }

      if (type === "password" && !showPassword) {
        setInputType("password");
      }
    }, [type, showPassword]);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <label className="mb-2 txt-compact-medium-plus">{topLabel}</label>
        )}
        <div className="inputGroup">
          <input
            type={inputType}
            name={name}
            placeholder=" "
            required={required}
            {...props}
            ref={inputRef}
          />
          <label htmlFor={name} onClick={() => inputRef.current?.focus()}>
            {label}
            {required && <span className="text-rose-500">*</span>}
          </label>
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-3"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
