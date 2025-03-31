import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import ScrollTab from "./Tabs";

const dataset = [
  {
    candidate: "Joseph Kim",
    votes: 45,
  },
  {
    candidate: "Gift Jeremiah",
    votes: 30,
  },
  {
    candidate: "Sunday Micah",
    votes: 93,
  },
];

const valueFormatter = (value) => `${value}`; // Formats the vote number as a string

const chartSetting = {
  xAxis: [
    {
      label: "Number of Votes",
    },
  ],
  width: 500,
  height: 300,
};

export default function Chart() {
  return (
    <div className=" p-4 w-full">
      <div className="px-0 mx-0">
        <ScrollTab />
      </div>
      <BarChart
        className="h-full py-3 w-full"
        dataset={dataset}
        yAxis={[
          {
            scaleType: "band",
            dataKey: "candidate",
            categoryGapRatio: 0.6,
            barGapRatio: 0.1,
          },
        ]}
        series={[
          {
            dataKey: "votes",
            label: "Votes",
            valueFormatter,
            color: "#29349d",
            // Enable labels on the bars
            showMark: true, // Optional: Ensures marks are visible (though not strictly needed here)
           
          },
        ]}
        layout="horizontal"
        borderRadius={5}
        margin={{ top: 20, bottom: 30, left: 100, right: 20 }}
        {...chartSetting}
      />
    </div>
  );
}
