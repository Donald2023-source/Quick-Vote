import React from "react";
import DonutChart from "react-donut-chart";

const Doughnut = ({ value }) => {
  // Ensure value is between 0 and 100 (optional validation)
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="relative inline-block">
      <DonutChart
        className="rounded-full"
        data={[
          {
            label: "", // Filled portion
            value: clampedValue,
          },
          {
            label: "", // Unfilled portion
            value: 100 - clampedValue,
          },
        ]}
        width={90} // Smaller width
        height={90} // Smaller height
        innerRadius={0.7} // Adjusted for a thinner ring
        outerRadius={0.9} // Adjusted for proper ring size
        colors={["#29339d", "#e5e7eb"]} // Filled: blue, Unfilled: light gray
        legend={false} // Hide legend
        interactive={false} // Disable interactivity
        strokeWidth={1} // Thin stroke
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-800">{clampedValue}</span>
      </div>
    </div>
  );
};

export default Doughnut;
