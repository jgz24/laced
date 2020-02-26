import React from "react";
import "./Product.css"

export default function Product({product}) {

    return (
        <React.Fragment>
            <div className="product">
                <button className="imageButton"><img src={product.Img} alt="" height="350" width="350"></img></button>
                <div className="priceQuantityInfo">
                    <p>{product.Name}</p>  
                    <p>{`${product.Quantity} left!`}</p>
                </div>
                <p>{`$${product.Price}`}</p>
                <button className="addCartButton">Add to Cart</button>
            </div>
        </React.Fragment>
    )
}