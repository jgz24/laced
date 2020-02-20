import React from "react";
import "./Filter.css";

function Filter(props) {
    let filterCategory = "";

    if (props.type === "Sort By") {
        filterCategory = "sortByCategory";
    }

    return (
        <React.Fragment>
            <div>
                <button className={"category" + filterCategory}>{props.type}</button>
                <button className="dropDownLogo" onClick='/'></button>
            </div>
        </React.Fragment>
    );
}

export default Filter;