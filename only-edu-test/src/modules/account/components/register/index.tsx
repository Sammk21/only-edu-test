"use client";

import { useForm } from 'react-hook-form';
import Input from "../input-box";
import { LOGIN_VIEW } from "../../templates/login-template";
import ErrorMessage from "../error-message";
import { SubmitButton } from "../submit-button";
import Link from "next/link";
import React, { useState, useMemo } from 'react';


type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");
  console.log("rendered");
  

  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    // Only allow digits (0-9)
    const input = e.target.value.replace(/\D/g, '');
    setPhone(input);
  };

  const handleKeyPress = (e) => {
    // Disable input if non-digit character is typed
    if (!/^\d*$/.test(e.key)) {
      e.preventDefault();
    }
  };
  const memoizedHandlePhoneChange = useMemo(() => handlePhoneChange, []);
  const memoizedHandleKeyPress = useMemo(() => handleKeyPress, []);

  const onSubmit = data => console.log(data); // Replace with your submit logic

  return (
    <div className="max-w-lg w-full text-dark dark:text-light flex flex-col items-center mx-auto  dark:bg-dark p-8 rounded-xl border border-borderLight dark:border-border ">
      <h1 className="text-[2vw] uppercase mb-6 ">Become Our Member</h1>
      <p className="text-center ] mb-4">Create your onlyEdu account</p>
      <form className="w-full flex flex-col text-black" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
      
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            {...register("first_name", { required: true, minLength: 2, maxLength: 15 })}
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            {...register("last_name", { required: true, minLength: 2, maxLength: 15 })}
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Input
            required
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={10}
            onChange={handlePhoneChange}
            onKeyPress={handleKeyPress}
            // {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}   
                     />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/ })}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            required
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (!value && !password) return true; // If both fields are empty, consider it as valid
                return value === password;
              }
            })}
          />
          {errors.confirmPassword && <p>Passwords do not match</p>}
        </div>
        <ErrorMessage error={null} /> {/* Change null to your actual error message */}
        <span className="text-start  text-small-regular mt-6">
          By creating an account, you agree to only edu{" "}
          <Link href="/content/privacy-policy" className="underline text-blue-500">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use" className="underline text-blue-500">
            Terms of Use
          </Link>
          .
        </span>
        <SubmitButton className="w-full h-10 bg-white border px-4 rounded-full text-black hover:bg-gray-300 flex justify-between items-center mt-6">
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-small-regular mt-6">
        Already a member?{" "}
        <button onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)} className="underline">
          Sign in
        </button>
        .
      </span>
    </div>
  );
};

export default Register;
