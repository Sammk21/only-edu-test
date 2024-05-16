import React from "react";
import { LOGIN_VIEW } from "../../templates/login-template";
import { SubmitButton } from "../submit-button";
import ErrorMessage from "../error-message";
import Input from "../input-box";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Login = ({ setCurrentView }: Props) => {
  const formAction = null; //create form status service to show pending asynchronously
  const message = null; //create form status service ti show error message

  return (
    <div className="max-w-lg w-full flex flex-col text-dark dark:text-light items-center mx-auto bg-white p-8 rounded-xl border border-borderLight dark:border-border">
      <h1 className="text-[2vw] inline-flex uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular  mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full ">
        {/* //add action={formAction} */}
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <SubmitButton className="w-full h-10 bg-white border  rounded-full text-black hover:bg-gray-300 flex justify-between items-center mt-6 px-3">
          Sign in
        </SubmitButton>
      </form>
      <span className="text-center text-black mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Join us
        </button>
        .
      </span>
    </div>
  );
};

export default Login;
