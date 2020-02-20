import React, {useState} from "react";
import "./Cart.css";

export default function MyCart() {
    const [cartItems, setCartItems] = useState(0);

    return  (
        <div>
            <a className="myCart" href="/">{`Cart (${cartItems})`}</a>
        </div>
    );
}