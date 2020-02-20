import React from "react";
import "./NavBar.css";
import SearchBar from "../search-bar/SearchBar";
import Cart from "../cart/Cart";

export default function NavBar() { 
    return (
    <div>
        <nav>
            <div>
                <button className="logo"><a href="/"></a></button>
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

