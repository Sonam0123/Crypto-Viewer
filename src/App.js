import axios from 'axios'
import React, { useState, useEffect, useParams } from 'react'
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Dropdown from './components/Dropdown';
import ShowPage from './components/ShowPage';
import CoinsList from './coins/CoinsList';
import Homepage from './components/Homepage';


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(0)


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
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
        <Link to='/'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4gSDzZ-rHQTVUhqeuTRW1KZA0LoEAnsZWtA&usqp=CAU" alt="" />
          <h1>Crypto Viewer</h1>
        </Link>
        <div id='dropdown'>
        <Dropdown />
        </div>
      </nav>

      <main>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/coin-list' element={<CoinsList  
            filteredCoins={filteredCoins} 
            handleChange={handleChange}/>} />
            <Route path="/crypto-data/:symbol" element={<ShowPage coins={coins}/>}/>
        </Routes>          
      </main>
    </div>
  );
}

export default App;
