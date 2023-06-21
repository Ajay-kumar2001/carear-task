import React from 'react';

const ThermostatDataBrowser = () => {
  return (
    <div>
      <h2>Thermostat Data</h2>

      <details>
        <summary>Details</summary>
        <div>
          {/* Display placeholder information or default values */}
          <p>Product: N/A</p>
          <p>Version: N/A</p>
          <p>ID: N/A</p>
          <p>HVAC Mode: N/A</p>
          <p>Deadband: N/A</p>
          <p>Outdoor Temp Lockout: N/A</p>
          <p>Program Mode: N/A</p>
          <p>Fan Mode: N/A</p>
          <p>Num Fan Stages: N/A</p>
          <p>Num Compressor Stages: N/A</p>
          <p>Num Heat Stages: N/A</p>
          <p>Has Heat Pump: N/A</p>
          <p>Smart Sensor Count: N/A</p>
          <p>Timestamp: N/A</p>
          <p>Outdoor Temperature: N/A</p>
          <p>Indoor Temperature: N/A</p>
          <p>Outdoor Humidity: N/A</p>
          <p>Indoor Humidity: N/A</p>
        </div>
      </details>

      <h3>Summary</h3>
      <p>Average Temperature: N/A</p>
      <p>Humidity Difference: N/A</p>
    </div>
  );
};

export default ThermostatDataBrowser;
