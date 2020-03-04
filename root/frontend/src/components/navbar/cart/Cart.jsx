import React, {useState,useEffect} from "react";
import "./Cart.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function MyCart() {
    const cartItems = useSelector(state => state.cartItems);
    
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        let tempTotalItems = Object.keys(cartItems).length;
        setCartItemsCount(tempTotalItems);
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