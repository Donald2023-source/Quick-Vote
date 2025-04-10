import React from "react";
import {twMerge} from 'tailwind-merge'

const Button = ({className, disabled, children, onClick }) => {
  return (
    <button onClick={onClick} className={twMerge('py-3 bg-primary my-4 text-white rounded-lg hover:scale-105 hoverEffect px-10', className)}>
      {children}
    </button>
  );
};

export default Button;
