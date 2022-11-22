import axios from "axios";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

   function RandomBeer() {
    const [beers, setBeers] = useState([])
 
    useEffect(() => {
       const apiCall = async () => {
          const res = await axios.get(apiEndpoint)
          setBeers(res.data[0])
       }
        apiCall()
    }, [])

   const clickHandler = () => {
    RandomBeer()
  }

  return (
    <div>
        <Link to="/">Back to Home </Link> <br /><br />
        <img src={beers.image_url} alt={beers.name}></img>

       <h1> Beer Details</h1>
       
       <p>{beers.name}</p>
       <p>{beers.tagline}</p>
       <p>{beers.description}</p>
       <p>{beers.first_brewed}</p>
       <p>{beers.attenuation_level}</p>
       
    </div>
 )
}
export default RandomBeer
