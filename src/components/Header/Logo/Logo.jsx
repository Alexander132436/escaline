import { Link } from "react-router-dom";
import logo from '../../../images/pictures/favicon.png'
import './Logo.css' 
export default function Logo()
{
    return(
        <Link to='/' className="logo">
            <img src={logo} alt="EscaliNe"/>
            <h2>ESCALINE</h2>
        </Link>
    )
}