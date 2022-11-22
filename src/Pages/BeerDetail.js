import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import NavBar from "../Component/NavBar";
import './BeerDetails.css'


const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetail() {
   const {beerId } = useParams()
   const [beers, setBeers] = useState({})

   useEffect(() =>{
      const apiCall = async () => {
         const res = await axios.get((apiEndpoint + beerId))
         setBeers(res.data)
      }

      apiCall()
   }, [])



   return (
      <div>
         <NavBar></NavBar>
          <Link to="/beers">Back to beer </Link> <br /><br />
          <img src={beers.image_url} alt={beers.name}></img>
         <h1> Beer Details</h1>
         
         <p>{beers.name}</p>
         <p>{beers.description}</p>
         <p>{beers.first_brewed}</p>
         <p>{beers.tagline}</p>
         <p>{beers.attenuation_level}</p>
         <p>{beers.cotributed_by}</p>
     
      </div>
   )
}


export default BeerDetail