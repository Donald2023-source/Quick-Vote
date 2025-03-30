import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter} from '../data/weather'

const chartSetting = {
  xAxis: [
    {
      label: "Number of Votes",
    },
  ],
  width: 500,
  height: 400,
};

export default function Chart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "candidate" }]}
      series={[{ dataKey: "votes", label: "Votes", valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
