import React from "react";
import DonutChart from "react-donut-chart";
const Doughnut = ({ value }) => {
  return (
    <div>
      <div className="relative inline-block">
        <DonutChart
          className="rounded-full"
          data={[
            {
              label: "", // Empty label to avoid text outside the chart
              value: value, // Single value to make it a full circle
            },
          ]}
          width={90} // Smaller width
          height={90} // Smaller height
          innerRadius={3} // Larger inner radius for a thin ring
          outerRadius={0.7} // Slightly smaller outer radius
          colors={["#29339d"]} // Single color (e.g., blue)
          legend={false} // Hide legend
          interactive={false} // Disable interactivity
          strokeWidth={1} // Remove stroke for cleaner look
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Doughnut;
