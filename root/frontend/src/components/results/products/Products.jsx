import React from "react";
import "./Products.css";
import Product from "./product/Product";

export default function Products({products}) {
   
    // Case where empty object was returned by
    // search. There's nothing to render,
    // so just return null.
    if (Object.keys(products).length === 0) {
        return null;
    }

    return (
        <div className="container">
            <div className="filterFlexGrid">
                    {products.map((product,idx) => <Product key={idx} product={product} />)}
            </div>
        </div>
    )
}