import LoginTemplate from "@/modules/auth/login";
import React from "react";

const page = () => {
  return (
    <div className="text-center py-28 bg-gradient-to-r from-orange-100 to-teal-100 overflow-hidden">
      <LoginTemplate />
    </div>
  );
};

export default page;
