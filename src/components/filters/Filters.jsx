import React from "react";
import "./Filters.css"
import Filter from "../filter/Filter";
import FilterDropDown from "../filter-drop-down/FilterDropDown";

export default function Filters({filters}) {
    return ( 
        <div className="container">
            <div className="filterFlex">
                {filters.map(filter => 
                <div className="filter">
                    <Filter key={filter.category} type={filter.category} />
                    <FilterDropDown key={filter.category} options={filter.options} />
                </div>
                )}
            </div>
        </div>
    );  
} 
