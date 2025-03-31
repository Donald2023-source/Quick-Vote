import React, { useState } from "react";
import Calendar from "react-calendar";
import { twMerge } from "tailwind-merge";


function MyCalendar({ className }) {
  const [date, setDate] = useState(new Date());

  const markedDates = [
    new Date(2025, 2, 28), // March 28, 2025
    new Date(2025, 2, 15), // March 15, 2025
  ];

  // Function to check if a date is marked
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const isMarked = markedDates.some(
        (markedDate) =>
          markedDate.getDate() === date.getDate() &&
          markedDate.getMonth() === date.getMonth() &&
          markedDate.getFullYear() === date.getFullYear()
      );
      return isMarked ? <div className="marked-day"></div> : null;
    }
  };

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={twMerge("calendar-container max-w-sm", className)}>
      <Calendar
        className="calendar shadow max-h-[300px] rounded-xl py-1 md:px-12 max-w-sm font-medium text-sm"
        onChange={onChange}
        value={date}  
        tileContent={tileContent}
        tileClassName={({ date }) =>
          date.toDateString() === new Date().toDateString() ? "current-day" : ""
        }
      />
    </div>
  );
}

export default MyCalendar;
