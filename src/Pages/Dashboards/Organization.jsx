import React from "react";
import { useParams } from "react-router-dom";
import WelcomeBanner from "../../Components/WelcomeBarner";
import Chart from "../../Components/BarChart";
import ElectionStats from "../../Components/ElectionStats";

const Organization = () => {
    const params = useParams()
    console.log(params);

    const Student = [
        "President Student Council",
        "Student Post 2",
        "Student Post 3",
        "Student Post 4",
      ];
    const Cooperative = [
        "President Cooperative  Council",
        "Student Post 2",
        "Student Post 3",
        "Student Post 4",
      ];
    return <div>
    
        <div>
            <WelcomeBanner name={params.name} />
            <div className="flex gap-[5%] items-center md:flex-row flex-col max-w-full">
            <div className="w-[60%] py-5 h-fit flex flex-col gap-8">
            <Chart Posts={Student} />
            <Chart Posts={Cooperative} />
            </div>

            <ElectionStats className={'w-[35%] h-full'} />
            </div>
        </div>
    </div>;
};

export default Organization;
