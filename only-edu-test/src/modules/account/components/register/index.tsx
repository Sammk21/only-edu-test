"use client";

import { useFormState } from "react-dom";
import Input from "../input-box";
import { LOGIN_VIEW } from "../../templates/login-template";
// import { signUp } from "@modules/account/actions";
import ErrorMessage from "../error-message";
import { SubmitButton } from "../submit-button";
import Link from "next/link";
import { useForm } from 'react-hook-form';

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};
const Register = ({ setCurrentView }: Props) => {
  // const [message, formAction] = useFormState(signUp, null);

  const message = "error";

   const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => alert(data);
  console.log(errors);

  return (
    <div className="max-w-lg w-full text-dark dark:text-light flex flex-col items-center mx-auto  dark:bg-dark p-8 rounded-xl border border-borderLight dark:border-border ">
      <h1 className="text-[2vw] uppercase mb-6 ">Become Our Member</h1>
<<<<<<< HEAD
      <p className="text-center text-[#115e5d] mb-4">Create you onlyEdu acc</p>
      <form className="w-full flex flex-col text-black" onSubmit={handleSubmit(onSubmit)}>
=======
      <p className="text-center  mb-4">Create you onlyEdu acc</p>
      <form className="w-full flex flex-col ">
>>>>>>> 0c2e5f6b397a573ded7ab90d85f3482bfa717022
        {/*action={formAction}*/}
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            {...register("First name", {required: true, min: 2, maxLength: 15})}
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
          />
          
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input
            required
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-start  text-small-regular mt-6">
          By creating an account, you agree to only edu{" "}
          <Link
            href="/content/privacy-policy"
            className="underline text-blue-500"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/content/terms-of-use"
            className="underline text-blue-500"
          >
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
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  );
};

export default Register;
