import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Dropdown from './components/Dropdown';
import ShowPage from './cryptoData/ShowPage';
import CoinsList from './coins/CoinsList';
import Homepage from './components/Homepage';



function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=300&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="App">
      <nav id='nav'>
        <div id='dropdown'>
        <Dropdown />
        </div>
        <Link to='/'>
          <button>Home</button>
        </Link>
          <h1>Crypto Viewer</h1>      
      </nav>
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,pumpkin-inu,pumpkin-punks,shitcoin,afro,agenor,dinero,dingocoin,ethereum,eos,ripple,litecoin,tron,polkadot,dai" currency="usd" background-color="black" locale="en"></coingecko-coin-price-marquee-widget>
      <main>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/coin-list' element={<CoinsList
            filteredCoins={filteredCoins} 
            handleChange={handleChange}/>} />
            <Route path="/crypto-data/:symbol" element={<ShowPage coins={coins}/>} />
        </Routes>          
      </main>
    </div>
  );
}

export default App;
