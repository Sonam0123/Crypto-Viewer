import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Stockchart({coinData}) {

 const coinChart = coinData.map(chart => {
  return (
    <div>
      <Line
        data={{
          // x-axis label values
          labels: [chart.atl_date, chart.ath_date, chart.last_updated],
          datasets: [
            {
              label: <p>{chart.symbol}</p>,
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
      />
    </div>
  );
 })

  return (
    <div>
      {coinChart}
    </div>
  );
}

export default Stockchart