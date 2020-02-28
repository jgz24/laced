import React, { useState,useEffect } from "react";
import "./Product.css";
import {CSSTransition} from 'react-transition-group'; 

export default function Product({product}) {
    const [animation,setAnimation] = useState(false);

    // To be able to show product animation.
    useEffect(() => {
        setAnimation(true);
    },[]);

    return (
        <React.Fragment>
            <CSSTransition
            in = {animation}
            timeout={300}
            classNames="animation-products">
                <div className="product">
                    <button className="imageButton"><img src={product.Img} alt="" height="350" width="350"></img></button>
                    <div className="priceQuantityInfo">
                        <p>{product.Name}</p>  
                        <p>{`${product.Sport}`}</p>
                    </div>
                    <div className="priceQuantityInfo">
                        <p>{`$${product.Price}`}</p>
                        <p>{product.Quantity <= 4 ? `${product.Quantity} left!` : ""}</p>
                    </div>
                    <button className="addCartButton">Add to Cart</button>
                </div>
            </CSSTransition>
        </React.Fragment>
    )
}