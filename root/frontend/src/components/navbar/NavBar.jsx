import React from "react";
import "./NavBar.css";
import SearchBar from "../search-bar/SearchBar";
import Cart from "../cart/Cart";

export default function NavBar({handleSearch}) { 
    return (
    <div>
        <nav>
            <div>
                <a href='/'><button className="logo"></button></a>
            </div>
            <div>
                <SearchBar handleSearch={handleSearch}/>
            </div>
            <div>
                <Cart />
            </div>       
        </nav>
    </div>
    );
}

