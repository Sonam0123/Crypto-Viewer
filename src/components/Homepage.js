import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'
import '../App.css'
const Homepage = () => {
  return (
      <div id='homePage' >
        
         <div >
                <h2 id='homeHead'>Welcome to Crypto Viewer</h2>
                    <p>This website makes it easy for users to view over 300 different cryptocurrencies and their real time data. Click the button below to view our list of cryptocurrencies. </p>
                    <Link to='/coin-list'>
                    <button className='homeBtn'> Cryptos</button>
                    </Link>
        </div>
    </div>
  )
}

export default Homepage