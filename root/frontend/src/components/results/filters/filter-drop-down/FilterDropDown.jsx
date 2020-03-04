import React from "react";
import "./FilterDropDown.css";
import DropDownLabel from "./drop-down-label/DropDownLabel";

export default function FilterDropDown({checkedFilter, category, handleCheckedChange}) {
    let checkedFilters = Object.entries(checkedFilter);

    return (
        <React.Fragment>
            <form className="filterFlexColumn">
            {checkedFilters.map((option,idx) =>
                <DropDownLabel key={idx} category={category} option={option[0]} handleCheckedChange={handleCheckedChange} checked={option[1]}/>
            )}
            </form>
        </React.Fragment>
    );
}
