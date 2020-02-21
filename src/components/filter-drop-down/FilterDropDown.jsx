import React from "react";
import "./FilterDropDown.css";

function FilterDropDown(props) {
    return (
            <form className="filterFlexColumn">
                {props.data.map(option => <label className="categoryLabel"><input type="checkbox"/>{option}</label>)}
            </form>
    );
}

export default FilterDropDown;