import React from 'react';import './App.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Beers from './Pages/Beers';
import RandomBeer from './Pages/randomBeer';
import NewBeer from './Pages/newBeer';
import BeerDetail from './Pages/BeerDetail';


function App() {
  return (
    <div className="App">
      <header className="App-header">

         <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/Beers" element={<Beers></Beers>} />
            <Route path="/randomBeer" element={<RandomBeer></RandomBeer>} />
            <Route path="/newBeer" element={<NewBeer></NewBeer>} />
            <Route path="/beers/:beerId" element={<BeerDetail></BeerDetail>} />
         </Routes>

      </header>
    </div>
  );
}

export default App;
