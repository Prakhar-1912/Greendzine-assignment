import React from 'react'

const productivity_data = [
    {
      day: "Monday",
      percentage: "14%",
    },
    {
      day: "Tuesday",
      percentage: "72%",
    },
    {
      day: "Wednesday",
      percentage: "22%",
    },
    {
      day: "Thursday",
      percentage: "53%",
    },
    {
      day: "Friday",
      percentage: "79%",
    },
    {
      day: "Saturday",
      percentage: "98%",
    },
  ];
  
const Productivity = () => {
  return (
    <>
        <div className="dashboard-items">
          <h2>Employee Productivity Dashboard</h2>
          <div className="productivity">
            {productivity_data.map((item) => {
              // Extract the numeric value from the percentage string
            const percentageValue = parseInt(item.percentage, 10) || 0;
            
            // Calculate the width of the progress bar dynamically
            const progressBarWidth = `${(percentageValue / 100) * 50}%`;

              return (
                <div className="productivityData">
                  <div className="productivityData-list">
                    <h2>Productivity on {item.day} </h2>
                    <span>{item.percentage}</span>
                  </div>
                  <div className="progressbar" style={{ width: progressBarWidth }}>
                  <div className="bar"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}

export default Productivity