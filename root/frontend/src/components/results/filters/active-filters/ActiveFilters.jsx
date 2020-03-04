import React from "react";
import "./ActiveFilters.css";

export default function ActiveFilters({filterCategory,filterOption,handleActiveFilterClick}) {

    const handleClick = () => {
        handleActiveFilterClick(filterCategory,filterOption);
    } 

    return (
        <div className="activeFilters">
            <button className="filterButton" onClick={handleClick}>{filterOption}</button>
            <button className="filterCrossLogo" onClick={handleClick}></button>
        </div>
    )
}