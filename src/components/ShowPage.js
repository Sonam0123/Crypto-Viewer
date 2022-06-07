import React from 'react';
import { useParams } from 'react-router-dom';
import '../coins/coin.css'
import Stockchart from './Stockchart';
const ShowPage = ({coins}) => {

const {symbol} = useParams();
console.log(symbol)

const coinData = coins.map(data => {
  if(data.symbol === symbol){
  return(
    <div className='showDiv'>
      <h1>Stock Name: {data.name}</h1>
      <h3 className='stockHead'>
       Symbol: {data.symbol.toUpperCase()}</h3>
      <p>Market Capacity: ${data.market_cap.toLocaleString()}</p>
      <p>Circulating Supply: ${data.circulating_supply.toLocaleString()}</p>
      <p>Total Volume: {data.total_volume.toLocaleString()}</p>
    </div>
  )
  }
})

console.log(coins)



  return (
    <div>
      {coinData}
      <Stockchart />
    </div>
  )
}

export default ShowPage