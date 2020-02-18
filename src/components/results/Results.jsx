import React from "react";
import "./Results.css"
import ProductInfo from "../productInfo/ProductInfo";
import Filters from "../filters/Filters";

export default function Results() {
    return (
        <React.Fragment>
            <ProductInfo />
            <div className="container lineBreak-products"></div>
            <Filters />
            <div className="container lineBreak-products"></div>
        </React.Fragment>
    );
}