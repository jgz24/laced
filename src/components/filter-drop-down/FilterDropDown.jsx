import React from "react";
import "./FilterDropDown.css";

function FilterDropDown(props) {
    return (
        <div>
            <form className="filterFlexColumn">
                {props.data.map(option => <label><input type="checkbox"/>{option}</label>)}
            </form>
        </div>
    );
}

export default FilterDropDown;