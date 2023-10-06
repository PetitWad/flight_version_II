import React, { useState, useEffect } from "react";
import Arrivals from "./Arrivals";
import Departures from "./Departures";

const Index = () => {
  const [showArrivals, setShowArrivals] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrivals((prev) => !prev);
    }, 1 * 49 * 1000); // Changer de page toutes les 50 secondes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="index-container">
      {showArrivals ? <Arrivals /> : <Departures />}
    </div>
  );
};

export default Index;
