import { twMerge } from "tailwind-merge";

import Doughnut from "./Doughnut";

const ElectionStats = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full flex shadow rounded-lg flex-col justify-center items-center p-3 sm:p-4",
        className
      )}
    >
      <h2 className="font-semibold text-base sm:text-lg text-primary py-3 sm:py-4">
        Voting Process
      </h2>
      <div className="flex flex-col sm:flex-row md:flex-col items-center gap-6 sm:gap-10">
        <div className="flex flex-col items-center justify-between">
          <Doughnut value={70} />
          <h2 className="font-semibold text-xs sm:text-sm w-[80%] text-center text-primary mt-2">
            Total Number of registered voters
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Doughnut value={90} />
          <h2 className="font-semibold text-xs sm:text-sm w-[80%] text-center text-primary mt-2">
            Total Number of Votes
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Doughnut value={3} />
          <h2 className="font-semibold text-xs sm:text-sm w-[80%] text-center text-primary mt-2">
            Total Number of registered candidates
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ElectionStats;
