import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Button from "./Button";
const CandidateDetails = ({ data, onClose }) => {
  console.log(data);

  return (
    <div className="md:p-10 p-7 flex flex-col w-full relative">
      <div className="flex items-center gap-8">
        <img
          className="md:h-36 h-20 w-20 object-cover rounded-full md:w-36"
          src={data.image}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <p className="hidden md:hidden">vote</p>
          <h2 className="md:text-3xl text-xl text-primary font-bold tracking-wide">
            {data.name}
          </h2>
          <span className="md:text-xl text-sm text-primary flex items-center gap-2">
            For <h2 className="font-bold">{data.role}</h2>
          </span>
          <span className="flex items-center gap-2">
            <SchoolIcon className="text-primary/50" />
            <p className="md:text-base text-sm">{data.department}</p>
          </span>
        </div>
      </div>

      <div className="leading-8 py-1">{data.manifesto}</div>
      <Button className={'w-fit flex items-center justify-center'}>Vote</Button>
    </div>
  );
};

export default CandidateDetails;
