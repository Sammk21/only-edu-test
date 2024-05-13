"use client";
import { Button } from "@headlessui/react";
import React from "react";

export function SubmitButton({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "danger" | null;
  className?: string;
}) {
  //   const { pending } = useFormStatus();

  return (
    <Button
      className={className}
      type="submit"
      //   isLoading={pending}
      //   variant={variant}
    >
      {children}
    </Button>
  );
}
