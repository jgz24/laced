import React from "react";
import "./Filter.css";

export default function Filter({type}) {
    return (
        <React.Fragment>
            <button className="filterCategory">{type}</button>
            <button className="dropDownLogo"></button>
        </React.Fragment>
    );
}
