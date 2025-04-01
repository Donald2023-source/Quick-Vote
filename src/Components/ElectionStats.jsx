import { twMerge } from "tailwind-merge";

import Doughnut from "./Doughnut";

const ElectionStats = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full flex shadow rounded-lg flex-col justify-center items-center",
        className
      )}
    >
      <h2 className="font-semibold text-lg text-primary py-4">
        Voting Process
      </h2>
      <div className="flex md:flex-col flex-row items-center gap-10">
        <div className="flex flex-col items-center justify-between">
          <Doughnut value={70} />
          <h2 className="font-semibold text-sm w-[70%] text-center text-primary">
            Total Number of registered voters
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Doughnut value={90} />
          <h2 className="font-semibold text-sm w-[70%] text-center text-primary">
            Total Number of Votes
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Doughnut value={3} />
          <h2 className="font-semibold text-sm w-[70%] text-center text-primary">
            Total Number of regustered candidates
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ElectionStats;
