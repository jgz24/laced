import React, {useState,useEffect} from "react";
import "./Filters.css"
import Filter from "./filter/Filter";
import FilterDropDown from "./filter-drop-down/FilterDropDown";
import ActiveFilters from "./active-filters/ActiveFilters";

export default function Filters({ filters, handleCheckedChange, handleActiveFilterClick}) {
    const [activeFilters,setActiveFilters] = useState([]);

    useEffect(() => {
        let filterKeys = Object.keys(filters);
        let filterArray = [];

        // Get all filter categories that are true.
        filterKeys.forEach(filterKey => {
            let categories = Object.keys(filters[filterKey]);
            categories.map(category => filters[filterKey][category] === true ? filterArray.push({filterCategory : filterKey, filterOption : category}) : "");
        })

        setActiveFilters(filterArray);

    },[filters]);

    return ( 
        <React.Fragment>
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
        <div className="container lineBreak-products"></div>
        <div className="container">
            <div className="filterFlexActiveFilters">
                {activeFilters.map((activeFilter,idx) => 
                <ActiveFilters filterCategory={activeFilter.filterCategory} filterOption={activeFilter.filterOption} handleActiveFilterClick={handleActiveFilterClick}key={idx} /> 
                )}
            </div>
        </div>
        </React.Fragment>
    );  
} 
