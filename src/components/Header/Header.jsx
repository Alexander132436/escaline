// Header.jsx
import Contacts from "./Contacts/Contacts";
import Logo from "./Logo/Logo";
import './Header.css'
import Navigation from "./Navigation/Navigation";

export default function Header()
{
    return(
        <header className="header-container">
            <div className="header-wrapper">
                <div className="header-top">
                    <Logo />
                    <Contacts />
                </div> 
                <Navigation />
            </div>
        </header>
    )
}