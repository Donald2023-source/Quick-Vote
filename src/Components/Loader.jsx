import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary/80 z-50">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
