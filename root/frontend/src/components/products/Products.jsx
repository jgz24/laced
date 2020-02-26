import React from "react";
import "./Products.css";
import Product from "../product/Product";

export default function Products({products}) {
    return (
        <div className="container">
            <div className="filterFlexProducts">
                {products.map((product,idx) => <Product key={idx} product={product} />)}
            </div>
        </div>
    )
}