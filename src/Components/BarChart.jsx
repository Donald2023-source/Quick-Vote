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
        let height = 300; // Smaller default for mobile
        if (width >= 1024) height = 400; // lg
        else if (width >= 768) height = 350; // md
        else if (width < 640) height = 250; // sm
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className=" h-full overflow-x-auto">
      <div className="px-0 mx-0 w-full">
        <ScrollTab />
      </div>
      <div ref={containerRef} className="w-full">
        <BarChart
          className="h-full w-full py-3 mx-auto"
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
          margin={{ top: 20, bottom: 40, left: 20, right: 20 }}
        />
      </div>
    </div>
  );
}