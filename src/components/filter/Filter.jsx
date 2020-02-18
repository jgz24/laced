import React from "react";
import "./Filter.css";

function Filter(props) {
    let filterCategory = "";

    if (props.type === "Sort By") {
        filterCategory = "sortByCategory";
    }

    return (
        <React.Fragment>
            <div className={"filterCategories " + filterCategory}>
                <p className="filterCategories category" href="/">{props.type}</p>
                <button className="dropDownLogo" onClick='/'></button>
            </div>
        </React.Fragment>
        // <select>
        //     {props.data.map(option => <option value={option}>{option}</option> )}
        // </select>
    );
}

export default Filter;