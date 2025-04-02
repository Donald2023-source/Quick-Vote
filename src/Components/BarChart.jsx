import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import ScrollTab from "./Tabs";

const dataset = [
  { candidate: "Joseph Kim", votes: 45 },
  { candidate: "Gift Jeremiah", votes: 30 },
  { candidate: "Sunday Micah", votes: 93 },
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
        // Reduce width by capping it or applying a multiplier
        const constrainedWidth = Math.min(width, width * 0.8); // Reduce width to 80% of container
        let height = 350; // Increased default height for mobile
        if (width >= 1024) height = 450; // Increased height for lg
        else if (width >= 768) height = 400; // Increased height for md
        else if (width < 640) height = 300; // Increased height for sm
        setDimensions({ width: constrainedWidth, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="h-full shadow-lg rounded-lg border overflow-x-auto">
      <div className="px-0 mx-0 w-full">
        <ScrollTab />
      </div>
      <div ref={containerRef} className="w-full max-w-full mx-auto">
        <BarChart
          className="h-full w-full py-2 my-4 mx-auto"
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
