import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Posts = [
    "President Student Council",
    "Student Post 2",
    "Student Post 3",
    "Student Post 4",
  ];

  return (
    <Box >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable tabs"
      >
        {Posts.map((post, idx) => (
          <Tab
            key={idx}
            label={post}
            className="w-full"
            sx={{
              fontSize: "16px",
              color: "#000",
              textTransform: "none",
              "&:hover": {
                color: "#000",
              },
              "&.Mui-selected": {
                color: "#29349d",
                fontWeight: "bold",
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
