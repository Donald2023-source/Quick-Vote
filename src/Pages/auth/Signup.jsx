import React from "react";
import img from "../../assets/pexels-expect-best-79873-323776.jpg";
const Signup = () => {
  return (
    <div className="px-10 h-screen py-3">
      <div className="border flex gap-10 h-full">
        <div className="w-1/3 border">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div>
          <form action="">
            <fieldset className="border px-4 py-1 rounded ">
              <legend className="text-sm text-gray-400">Full Name</legend>
              <input type="text" placeholder="Full Name" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
