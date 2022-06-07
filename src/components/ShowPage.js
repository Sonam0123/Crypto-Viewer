import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <p className='crypto-data'>Market Capacity: ${data.market_cap.toLocaleString()}</p>
      <p className='crypto-data'>Circulating Supply: ${data.circulating_supply.toLocaleString()}</p>
      <p className='crypto-data'>Total Volume: {data.total_volume.toLocaleString()}</p>
      <p id='backBtn'>
      <Link to='/coin-list' style={{ textDecoration: 'none' }}>
        <button>Back</button>
      </Link>
      </p>
    </div>
  )
  }
})


console.log(coins)



  return (
    <div>
      {coinData}
      {/* <Stockchart /> */}
    </div>
  )
}

export default ShowPage