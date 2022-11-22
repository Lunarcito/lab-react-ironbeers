import {Link} from "react-router-dom";
import beerImg from "../assets/beers.png"
import newBeerImg from "../assets/new-beer.png"
import randomBeerImg from "../assets/random-beer.png"
import './Home.css';

const Homepage =() => {

    return (
        <div classname="homecard">

        <ul>
            <Link to ="/beers">All Beers</Link> <img src ={beerImg}/><br></br>
            <Link to ="/randomBeer">Random Beers</Link> <img src ={newBeerImg}/><br></br>
            <Link to ="/newBeer">New Beer</Link> <img src ={randomBeerImg}/><br></br>

            <div>


            </div>
        </ul>

        </div>
    )
    
}


export default Homepage;
