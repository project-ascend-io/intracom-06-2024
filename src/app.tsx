import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import EmailSettings from "./pages/email-configuration/email-configuration";

import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference =
      +new Date(`06/01/${new Date().getFullYear()}`) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: 800 }}>Are you ready for Project Ascend?</p>
        <p>Launching Soon!</p>
      </header>
      {/* <CountdownTimer /> */}

      <EmailSettings />
      {/* <TestComponent /> */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EmailSettings" element={<EmailSettings />} />
      </Routes>
    </Router>
  );
};
const root = createRoot(document.body);
root.render(<App />);
