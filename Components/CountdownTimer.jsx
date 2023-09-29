"use client";
import React, { Component } from "react";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTime, // Initial time in seconds
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTimer = () => {
    if (this.state.timeRemaining > 0) {
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    } else {
      clearInterval(this.interval);
      // Handle timer expiration here
    }
  };

  render() {
    const { timeRemaining } = this.state;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (3600 * 24));
    const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

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
  }
}

export default CountdownTimer;
