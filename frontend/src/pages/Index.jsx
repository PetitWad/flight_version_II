import React, { useState, useEffect } from "react";
import Arrivals from "./Arrivals";
import Departures from "./Departures";
import ChangementPage from "./ChangementPage";

const Index = () => {
  // State to toggle between Arrivals and Departures
  const [showArrivals, setShowArrivals] = useState(true);
  const [showChangementPage, setShowChangementPage] = useState(false);
  const PAGE_CHANGE_INTERVAL_SECONDS = 50;
  const PAUSE_BEFORE_CHANGE_SECONDS = 3;
  const MILLISECONDS_IN_SECOND = 1000;

  useEffect(() => {
    // Set interval to toggle between Arrivals and Departures every 50 seconds
    const interval = setInterval(() => {
      setShowChangementPage(true);

      // Pause for 3 seconds
      setTimeout(() => {
        setShowArrivals((prev) => !prev);
        setShowChangementPage(false);
      }, PAUSE_BEFORE_CHANGE_SECONDS * MILLISECONDS_IN_SECOND);
    }, (PAGE_CHANGE_INTERVAL_SECONDS + PAUSE_BEFORE_CHANGE_SECONDS) * MILLISECONDS_IN_SECOND);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="index-container">
      {/* Background Component */}
      {showArrivals && !showChangementPage && <Arrivals className="arrivals" />}
      {!showArrivals && !showChangementPage && <Departures className="departures" />}

      {/* Foreground Component */}
      {showChangementPage && <ChangementPage className="changement-page" />}
    </div>
  );
};

export default Index;
