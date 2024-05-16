// "use client";

<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import Input from "../input-box";
import { LOGIN_VIEW } from "../../templates/login-template";
import ErrorMessage from "../error-message";
import { SubmitButton } from "../submit-button";
import Link from "next/link";
import React, { useState, useMemo } from 'react';

=======
// import { useFormState } from "react-dom";
// import Input from "../input-box";
// import { LOGIN_VIEW } from "../../templates/login-template";
// // import { signUp } from "@modules/account/actions";
// import ErrorMessage from "../error-message";
// import { SubmitButton } from "../submit-button";
// import Link from "next/link";

// type Props = {
//   setCurrentView: (view: LOGIN_VIEW) => void;
// };
// const Register = ({ setCurrentView }: Props) => {
//   // const [message, formAction] = useFormState(signUp, null);

//   const message = "error";

//   return (
//     <div className="max-w-lg w-full text-dark dark:text-light flex flex-col items-center mx-auto  dark:bg-dark p-8 rounded-xl border border-borderLight dark:border-border ">
//       <h1 className="text-[2vw] uppercase mb-6 ">Become Our Member</h1>
//       <p className="text-center  mb-4">Create you onlyEdu acc</p>
//       <form className="w-full flex flex-col ">
//         {/*action={formAction}*/}
//         <div className="flex flex-col w-full gap-y-2">
//           <Input
//             label="First name"
//             name="first_name"
//             required
//             autoComplete="given-name"
//           />
//           <Input
//             label="Last name"
//             name="last_name"
//             required
//             autoComplete="family-name"
//           />
//           <Input
//             label="Email"
//             name="email"
//             required
//             type="email"
//             autoComplete="email"
//           />
//           <Input
//             required
//             label="Phone"
//             name="phone"
//             type="tel"
//             autoComplete="tel"
//           />
//           <Input
//             label="Password"
//             name="password"
//             required
//             type="password"
//             autoComplete="new-password"
//           />
//         </div>
//         <ErrorMessage error={message} />
//         <span className="text-start  text-small-regular mt-6">
//           By creating an account, you agree to only edu{" "}
//           <Link
//             href="/content/privacy-policy"
//             className="underline text-blue-500"
//           >
//             Privacy Policy
//           </Link>{" "}
//           and{" "}
//           <Link
//             href="/content/terms-of-use"
//             className="underline text-blue-500"
//           >
//             Terms of Use
//           </Link>
//           .
//         </span>
//         <SubmitButton className="w-full h-10 bg-white border px-4 rounded-full text-black hover:bg-gray-300 flex justify-between items-center mt-6">
//           Join
//         </SubmitButton>
//       </form>
//       <span className="text-center text-small-regular mt-6">
//         Already a member?{" "}
//         <button
//           onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
//           className="underline"
//         >
//           Sign in
//         </button>
//         .
//       </span>
//     </div>
//   );
// };

// export default Register;

"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/util/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { LOGIN_VIEW } from "../../templates/login-template";
>>>>>>> 1929c9890ec42f5c0c3f8e2ea0739acda4af3b14

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};
<<<<<<< HEAD

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
=======
export function Register({ setCurrentView }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border dark:border-border border-borderLight">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Only Educations
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Only education if you can because we don&apos;t have a login
        flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn  to-neutral-600 block bg-accent/60  dark:bg-foreground w-full text-white rounded-md h-10 font-medium  "
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
>>>>>>> 1929c9890ec42f5c0c3f8e2ea0739acda4af3b14
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20  dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]  "
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20 dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>

          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-accent/20  dark:bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      <span className="w-full flex justify-center items-center  gap-x-2 text-neutral-600  text-sm max-w-sm mt-2 dark:text-neutral-300">
        <span className=""> Already a member? </span>
        <span
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="text-bluelink underline cursor-pointer"
        >
          Sign in here
        </span>
      </span>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
