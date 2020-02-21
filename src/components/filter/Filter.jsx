import React from "react";
import "./Filter.css";
import FilterDropDown from "../filter-drop-down/FilterDropDown";

function Filter(props) {
    return (
        <React.Fragment>
            <div className="test">
                <button className="category">{props.type}</button>
                <button className="dropDownLogo" onClick='/'></button>
                <FilterDropDown data={props.data} />
            </div>
        </React.Fragment>
    );
}

export default Filter;