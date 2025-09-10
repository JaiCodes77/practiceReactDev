import React, { useEffect, useState } from "react";

function Weatherapp() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const weatherapi = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current_weather=true"
        );
        if (!response.ok) throw new Error("data fetching failed");
        const weatherdata = await response.json();
        setData(weatherdata);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    weatherapi();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Current Weather in Banglore</h2>
          <p>Temperature: {data.current_weather.temperature}°C</p>
          <p>Wind Speed: {data.current_weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}

export default Weatherapp;
