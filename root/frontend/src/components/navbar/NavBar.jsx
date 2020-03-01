import React from "react";
import "./NavBar.css";
import SearchBar from "../search-bar/SearchBar";
import Cart from "../cart/Cart";
import {Link} from "react-router-dom";

export default function NavBar({handleSearch,cartItems}) { 
    let autocompleteArray = [
        'Shoes','Men Shoes', 'Women Shoes', 'Athletic Shoes', 'Casual Shoes', 'Nike', 'Nike Shoes',
        'Adidas', 'Adidas Shoes', 'Vans', 'Vans Shoes', 'Converse', 'Converse Shoes', 'Basketball',
        'Basketball Shoes', 'Baseball', 'Baseball Cleats', 'Golf', 'Golf Shoes', 'Football', 
        'Football Cleats', 'Soccer', 'Soccer Cleats'
    ];

    const handleLogoClick = () => {
        handleSearch("");
    }

    return (
    <div>
        <nav>
            <Link to="/">
                <div>
                    <button onClick={handleLogoClick} className="logo"></button>
                </div>
            </Link>
            <SearchBar handleSearch={handleSearch} autocompleteArray={autocompleteArray}/>
            <Cart cartItems={cartItems} />    
        </nav>
    </div>
    );
}

