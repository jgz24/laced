import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import "../SearchBar/SearchBar.css";
import MyCart from "../MyCart/MyCart";
import "../MyCart/MyCart.css"

export default function NavBar() { 
    return <nav>
        <button className="logo"></button>
        <SearchBar />
        <MyCart />
    </nav>
}
