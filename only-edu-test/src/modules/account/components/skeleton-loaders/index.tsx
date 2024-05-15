// components/SkeletonLoader.tsx
import Spinner from "@/modules/common/icons/spinner";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loader;
