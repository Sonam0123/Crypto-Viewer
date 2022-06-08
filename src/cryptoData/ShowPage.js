import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../coins/coin.css'




const ShowPage = ({coins}) => {

const {symbol} = useParams();
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
      <p>Price: ${data.current_price.toLocaleString()}</p>
      <p id='backBtn'>
        <div className='butt-flexw'>
        <div className='butt'>
            <Link to='/coin-list' style={{ textDecoration: 'none' }}
            >
              <div className='bootyP'>
             <button>Back</button>
             </div>
           </Link>
      </div>
      <div className='coinChart'>
      <coingecko-coin-price-chart-widget  coin-id={`${data.id}`} currency="usd" height="300"   locale="en"></coingecko-coin-price-chart-widget>
      </div>
      </div>
      
      </p>
    </div>
  )
  }
})
  return (
    <div>
      {coinData}

    </div>
  )
}

export default ShowPage