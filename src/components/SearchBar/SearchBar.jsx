import React from "react";
import "./SearchBar.css";

export default function NavBarForm() {
    return (
        <div>
            <form>
                <div>
                    <input className="searchBar" type="text" name="shoeSearch"></input>
                    <button className="searchButton" type="submit"></button>
                </div>
            </form>
        </div>
    );
}