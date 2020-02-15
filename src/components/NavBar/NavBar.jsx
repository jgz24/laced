import React from "react";
import logo from "./logo.jpg";
import searchLogo from "./searchLogo.png"
import "./NavBar.css";

export default function NavBar() { 
    return <ul>
        <li><img className="logo" src={logo} alt={"Laced Logo"} /></li>
        <li>
            <form>
                <input type="text" name="shoeSearch"></input>
            </form>
        </li>
        <li>
        <input className="searchLogo" type="image" src={searchLogo}></input>
        </li>
        <li><a href="">Sign Up</a></li>
        <li><a href="">Login</a></li>
        <li><p>Cart</p></li>
    </ul>
}
