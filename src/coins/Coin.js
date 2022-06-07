import React from 'react'
import './coin.css'
const Coin = ({image, name, symbol,}) => {

  return (
    <div>
        <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto-img' />
          <h4>{name}</h4>
          <p className='coin-symbol'>: {symbol}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Coin