import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="./logo.png" alt="Logo" />
            <nav className="header__navbar">
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/">Accueil</NavLink>
                <NavLink className={state => state.isActive ? "header__navbar__link active" : "header__navbar__link"} to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}


export default Header;