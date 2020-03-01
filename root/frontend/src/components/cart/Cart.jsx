import React, {useState,useEffect} from "react";
import "./Cart.css";
import {Link} from "react-router-dom";

export default function MyCart({cartItems}) {
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        let tempTotalItems = Object.keys(cartItems).length;
        if (tempTotalItems > 0) {
            setCartItemsCount(tempTotalItems);
        }
    },[cartItems])

    return  (
        <div className="cartFlex">
            <Link to="/checkout">
                <button className="myCart"></button>
            </Link>
            <p>{cartItemsCount}</p>
        </div>
    );
}