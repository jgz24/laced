import React from "react";
import "./NavBar.css";
import SearchBar from "./search-bar/SearchBar";
import Cart from "./cart/Cart";
import {Link} from "react-router-dom";
import {searchApiCall} from "../../actions";
import {useDispatch} from "react-redux";

export default function NavBar() { 
    const dispatch = useDispatch();

    let autocompleteArray = [
        'Shoes','Men Shoes', 'Women Shoes', 'Athletic Shoes', 'Casual Shoes', 'Nike', 'Nike Shoes',
        'Adidas', 'Adidas Shoes', 'Vans', 'Vans Shoes', 'Converse', 'Converse Shoes', 'Basketball',
        'Basketball Shoes', 'Baseball', 'Baseball Cleats', 'Golf', 'Golf Shoes', 'Football', 
        'Football Cleats', 'Soccer', 'Soccer Cleats'
    ];

    return (
    <div>
        <nav>
            <Link to="/">
                <div>
                    <button onClick={() => dispatch(searchApiCall("/search"))} className="logo"></button>
                </div>
            </Link>
            <SearchBar autocompleteArray={autocompleteArray}/>
            <Cart />    
        </nav>
    </div>
    );
}

