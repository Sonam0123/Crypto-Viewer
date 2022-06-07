import React from 'react'
import {Line} from 'react-chartjs-2'
import Plot from 'react-plotly.js'


const Stockchart = () => {
  return (
    <div>
      <Plot 
        data={[{
          x: [11/2020, 1/2021, 3/2021],
          y: [200, 140, 100],
          type: 'scatter',
        }]}
          layout={{width: 1000, height: 600, title:'chart'}} 
      /> 
      </div>
  )
}

export default Stockchart