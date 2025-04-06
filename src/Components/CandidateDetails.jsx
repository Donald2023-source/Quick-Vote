import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Button from "./Button";
const CandidateDetails = ({ data, onClose }) => {
  console.log(data);

  return (
    <div className="p-10 flex flex-col w-full relative">
      <div className="flex items-center gap-8">
        <img
          className="h-36 object-cover rounded-full w-36"
          src={data.image}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <p>vote</p>
          <h2 className="text-3xl text-primary font-bold tracking-wide">
            {data.name}
          </h2>
          <span className="text-xl text-primary flex items-center gap-2">
            For <h2 className="font-bold">{data.role}</h2>
          </span>
          <span className="flex items-center gap-2">
            <SchoolIcon className="text-primary/50" />
            <p>{data.department}</p>
          </span>
        </div>
      </div>

      <div className="leading-8 py-1">{data.manifesto}</div>
      <Button className={'w-fit flex items-center justify-center'}>Vote</Button>
    </div>
  );
};

export default CandidateDetails;
