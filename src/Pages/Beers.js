import './beers.css';
import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom";
import axios from "axios"
import NavBar from "../Component/NavBar";
import Search from "../Component/Search";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function Beers() {
    const [beers, setBeers] = useState([])
    const [beersSearch, setSearch] = useState([])
 
    useEffect(() => {
       const apiCall = async () => {
          const res = await axios.get(apiEndpoint)
          setBeers(res.data)
          setSearch(res.data)
       }
 
       apiCall()
    }, [])
 
    const searchHandler = (searchData) => {
      if (searchData === ""){
         setSearch(beers)
      }
      const newArray = beers.filter((beer)=>{
         return beer.name.toLowerCase().includes (searchData)
      })
      setSearch(newArray)
   }
   return (
      <div>
          <NavBar />
          <Search onSearch={searchHandler} />
          <h1>Beers</h1>
          {beersSearch  ? beersSearch.map(beer => {
              return (
                  <div  classname="listbeer" key={beer.id}>
                      <Link to={`/beers/${beer.id}`}><img src  = {beer.image_url}alt="beers.id" /></Link>
                      <p>{beer.name}</p>
                      <p>{beer.tagline}</p>
                      <p>Ceated by: {beer.contributed_by}</p>
                  </div>
              ) 
          }): "not found"}
      </div>
  )
}

export default Beers;