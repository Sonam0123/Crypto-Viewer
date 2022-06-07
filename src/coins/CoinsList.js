import React from 'react'
import Coin from './Coin'
import { Link} from 'react-router-dom'
import './coin.css'

const CoinsList = ({filteredCoins, handleChange}) => {
   let coins = filteredCoins.map(coin => {
        return ( 
        <div className='coinDiv'>
            <Link style={{ textDecoration: 'none' }} to={"/crypto-data/" + coin.symbol}>
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
              />
          </Link>
      </div>
        )
    })    
  return (
    <div>
        <input onChange={handleChange} type="Search" name="search" placeholder='search'  />
        {coins}
    </div>
  )

}

export default CoinsList