import React, { useState } from "react";
import Calendar from "react-calendar";
import { twMerge } from "tailwind-merge";

function MyCalendar({ className }) {
  const [date, setDate] = useState(new Date());

  const markedDates = [
    new Date(2025, 2, 28),
    new Date(2025, 2, 15),
  ];

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

  return (
    <div
      className={twMerge(
        "calendar-container w-full h-full mx-auto",
        className
      )}
    >
      <Calendar
        className="calendar shadow h-full min-h-[200px] rounded-xl py-1 font-medium text-xs sm:text-sm"
        onChange={(newDate) => setDate(newDate)}
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
