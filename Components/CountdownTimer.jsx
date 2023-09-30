"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const targetDate = new Date("2023-12-08T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const totalSeconds = (targetDate - currentDate) / 1000;

      if (totalSeconds <= 0) {
        // Timer has expired, you can handle this case if needed
        clearInterval(interval);
        return;
      }

      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
      setHours(formatTime(Math.floor((totalSeconds / 3600) % 24)));
      setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
      setSeconds(formatTime(Math.floor(totalSeconds % 60)));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      <div className="w-[100px] text-center border-2 border-white rounded-xl p-5 flex-col">
        <h2 className="text-3xl font-bold">{days}</h2> <p>Days</p>
      </div>
      <div className="w-[100px] text-center border-2 border-white rounded-xl p-5 flex-col">
        <h2 className="text-3xl font-bold">{hours}</h2> <p>Hours</p>
      </div>

      <div className="w-[100px] text-center border-2 border-white rounded-xl p-5 flex-col">
        <h2 className="text-3xl font-bold">{minutes}</h2> <p>Minutes</p>
      </div>
      <div className="w-[100px] text-center border-2 border-white rounded-xl p-5 flex-col">
        <h2 className="text-3xl font-bold">{seconds}</h2> <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
