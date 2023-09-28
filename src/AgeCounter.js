import React, { useState, useEffect } from "react";

function AgeCounter() {
  const [age, setAge] = useState(calculateAge);

  function calculateAge() {
    const birthday = new Date("2000-10-07T01:02:00");
    const now = new Date();
    const ageInMillis = now - birthday;
    const ageInSeconds = ageInMillis / 1000;
    const ageInYears = ageInSeconds / 31556952; // 31556952 seconds in a year
    return ageInYears.toFixed(8);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 100); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{age} years down</h3>
    </div>
  );
}

export default AgeCounter;
