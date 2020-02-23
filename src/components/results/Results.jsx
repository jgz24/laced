import React from "react";
import "./Results.css"
import ProductInfo from "../product-info/ProductInfo";
import Filters from "../filters/Filters";

export default function Results() {
    const filters = [
        { category : 'Gender', options: ["Men","Women"]},
        { category : 'Activity', options: ["Athletic", "Casual"]},
        { category: 'Brand', options: ["Nike","Adidas","Vans"]},
        { category : 'Sport', options: ["Basketball", "Baseball","Golf","Football","Soccer"]},
        { category : 'Size', options : ["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12"]},
        { category : 'Color', options: ["Black","White","Red","Blue","Gray","Green","Orange"]},
        { category : 'Price', options: ["$1-$50","$50-$100","$100-$150","$150-$200","$200-$250","$250-$300","$300+"]},
        { category : 'Sort By', options : ["Newest", "Price(High-Low)", "Price(Low-High)", "Top Sellers"]}
    ];


    


    return (
        <React.Fragment>
            <ProductInfo />
            <div className="container lineBreak-products"></div>
            <Filters filters={filters}/>
            <div className="container lineBreak-products"></div>
        </React.Fragment>
    );
}