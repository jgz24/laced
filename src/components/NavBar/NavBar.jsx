import React from "react";
import "./NavBar.css";
import SearchBar from "../search-bar/SearchBar";
import Cart from "../cart/Cart";

export default function NavBar() { 
    return (
    <div>
        <nav>
            <div>
                <a href='/'><button className="logo"></button></a>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Cart />
            </div>       
        </nav>
    </div>
    );
}

