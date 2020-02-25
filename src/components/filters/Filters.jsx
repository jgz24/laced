import React from "react";
import "./Filters.css"
import Filter from "../filter/Filter";
import FilterDropDown from "../filter-drop-down/FilterDropDown";

export default function Filters({ filters, handleCheckedChange}) {
    return ( 
        <div className="container">
            <div className="filterFlex">
                {Object.keys(filters).map((filter,idx) => 
                <div key={idx} className="filter">
                    <Filter category={filter} />
                    <FilterDropDown category={filter} checkedFilter={filters[filter]} handleCheckedChange={handleCheckedChange}/>
                </div>
                )}
            </div>
        </div>
    );  
} 
