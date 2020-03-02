import React from "react";
import "./CheckOut.css";
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {toast} from "react-toastify";

toast.configure();

export default function CheckOut({cartItems}) {
    let cartItemKeys = Object.keys(cartItems);


    const handleToken = async (token) => {
        let fullBody = {...token};
        fullBody.total = total;
        fullBody.name = `${cartItems[cartItemKeys[0]].Name} and more!`;

        const response = await 
                        fetch("http://localhost:8080/checkout", 
                        {method: "POST",
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(fullBody)});

        const result = await response.json();

        console.log(result);

        if(result.status === "success") {
            toast("Success! Thanks for your purchase!", {type: 'success'});
            setTimeout( () => window.location.replace("http://localhost:3000/"), 5000);
        } 
        else {
            toast("Something went wrong!", {type: 'error'});
        }
    }

    const getBalance = () => {
        let tempTotal = 0.00;

        cartItemKeys.forEach(key => tempTotal += parseFloat(cartItems[key].Price));

        return tempTotal;
    }

    const getTax = () => {
        let tax = 0.00;

        cartItemKeys.forEach(key => tax += (parseFloat(cartItems[key].Price) * .0775));

        return Math.ceil(tax * 100)/100;
    }

    let balance = getBalance();
    let tax = getTax();
    let total = balance+tax;
    let cart;

    if(cartItemKeys.length <= 0) {
        cart = 
            <div className="container">
                <h1 className="yourCart">YOUR CART IS EMPTY</h1>
            </div>
    } else {
        cart = <div className="container">
                    <h1 className="yourCart">YOUR CART</h1>
                    <div className="cartItemsFlex"> 
                        <div className="cartItem">
                            <h2>Item</h2>
                            <h2>Name</h2>
                            <h2>Color</h2>
                            <h2>Size</h2>
                            <h2>Price</h2>
                        </div>
                        {cartItemKeys.map((key,idx) => {
                            return (
                            <div key={idx} className="cartItem">
                                <Link to={{
                                    pathname: `/product/${cartItems[key].Name}`,
                                    state: cartItems[key]
                                }}><img src={cartItems[key].Img} title={cartItems[key].Name} alt="" height="100" width="100"></img>
                                </Link> 
                                <p>{cartItems[key].Name}</p>
                                <p>{cartItems[key].Color.map(color => `${color} `)}</p>
                                <p>{cartItems[key].Size}</p>
                                <p>{`$${cartItems[key].Price}`}</p>    
                            </div>
                            )
                        })}
                    </div>
                    <div className="totals">
                        <div className="cartItemFlex">
                            <p>{`$${balance}`}</p>
                            <p>{`$${tax}`}</p>
                            <p>{`$${total}`}</p>
                        </div>
                        <div className="cartItemFlex">
                            <p>Balance: </p>
                            <p>Tax @ 7.75%: </p>
                            <p>Total: </p>
                        </div>
                    </div>
                    <div className="stripeButton">
                        <StripeCheckout stripeKey="pk_test_p3Sim8gJawuffayCyzXKDThx00QtgvDmh3" 
                                    token={handleToken} 
                                    billingAddress
                                    shippingAddress
                                    amount={total*100}
                                    name={`${cartItems[cartItemKeys[0]].Name} and more!`}
                        />
                    </div>
                </div>
    }

    return (
        <React.Fragment>
            {cart}
        </React.Fragment>
    )
}