import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from "../assets/home.png"

function NavBar (props){

    return(
        <nav className ="navbar">
            <Link to= {"/"}>
                <img src={logo} alt ="homelogo" classname="logo"/>
            </Link>
        </nav>
    )
}

export default NavBar;

