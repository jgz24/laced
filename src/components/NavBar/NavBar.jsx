import React from "react";
import "./NavBar.css";
import SearchBar from "../searchbar/SearchBar";
import Cart from "../mycart/Cart";

export default function NavBar() { 
    return (
    <div>
        <nav>
            <div>
                <button className="logo"></button>
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

