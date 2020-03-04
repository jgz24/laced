import React from "react";
import "./Filter.css";

export default function Filter({category}) {
    return (
        <React.Fragment>
            <button className="filterCategory">{category}</button>
            <button className="dropDownLogo"></button>
        </React.Fragment>
    );
}
