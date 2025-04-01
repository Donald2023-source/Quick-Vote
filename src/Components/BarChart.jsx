import * as React from "react";
import { useState, useEffect, useRef } from "react";
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

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  xAxis: [
    {
      scaleType: "band",
      dataKey: "candidate",
      label: "Candidates",
      categoryGapRatio: 0.7,
      barGapRatio: 0.1,
    },
  ],
  yAxis: [
    {
      label: "Number of Votes",
    },
  ],
};

export default function Chart() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        let height = 380; // default mobile
        if (width >= 1024) {
          height = 400; // lg
        } else if (width >= 768) {
          height = 350; // md
        }
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="p-5  h-full">
      <div className="px-0 mx-0 w-full">
        <ScrollTab />
      </div>
      <div
        ref={containerRef}
        className="w-full " // Changed to overflow-x-auto for horizontal scrolling
      >
        <BarChart
          className="h-full w-full py-3 min-w-[200px] mx-auto flex" // Added min-w to ensure content is scrollable
          width={dimensions.width}
          height={dimensions.height}
          dataset={dataset}
          xAxis={chartSetting.xAxis}
          yAxis={chartSetting.yAxis}
          series={[
            {
              dataKey: "votes",
              label: "Votes",
              valueFormatter,
              color: "#29349d",
              showMark: true,
            },
          ]}
          borderRadius={5}
          margin={{ top: 20, bottom: 50, left: 20, right: 40 }}
        />
      </div>
    </div>
  );
}
