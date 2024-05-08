import LoginTemplate from "@/modules/auth/login";
import React from "react";

const page = () => {
  return (
    <div className="text-center pt-28 pb-14 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden">
      <LoginTemplate />
    </div>
  );
};

export default page;
