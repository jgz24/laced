import React from "react";
import "./CheckOut.css";
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {toast} from "react-toastify";
import {useSelector,useDispatch} from "react-redux";
import {deleteCartItem, removeAllCartItems} from "../../../actions";

toast.configure();

export default function CheckOut({history}) {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    let cartItemKeys = Object.keys(cartItems);


    const handleBack = () => {
        history.goBack();
    }

    const handleToken = async (token) => {
        let fullBody = {...token};
        fullBody.total = total;
        fullBody.name = `${cartItems[cartItemKeys[0]].Name} and more!`;

        const response = await 
                        fetch("/checkout", 
                        {method: "POST",
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(fullBody)});

        const result = await response.json();

        console.log(result);

        if(result.status === "success") {
            toast("Success! Thanks for your purchase!", {type: 'success', autoClose: 3000});
            setTimeout( () => dispatch(removeAllCartItems()), 3000);
            setTimeout( () => window.location.replace("/"), 3000);
        } 
        else {
            toast("Something went wrong!", {type: 'error'});
        }
    }

    const getBalance = () => {
        let tempTotal = 0;

        cartItemKeys.forEach(key => tempTotal += parseFloat(cartItems[key].Price));
        

        return tempTotal;
    }

    const getTax = () => {
        let tax = 0;

        cartItemKeys.forEach(key => tax += parseFloat(cartItems[key].Price) * .0775);

        return Math.round(tax*100)/100;
    }

    let balance = getBalance();
    let tax = getTax();
    let total = balance+tax;
    let cart;

    if(cartItemKeys.length <= 0) {
        cart = 
            <div className="container">
                <div className="goBackCheckout">
                    <button className="goBackCheckoutLogo"></button>
                    <button className="goBackCheckoutButton" onClick={handleBack}>Back</button>
                </div>
                <h1 className="yourCart">YOUR CART IS EMPTY</h1>
            </div>
    } else {
        cart = <div className="container">
                    <div className="goBackCheckout">
                        <button className="goBackCheckoutLogo"></button>
                        <button className="goBackCheckoutButton" onClick={handleBack}>Back</button>
                    </div>
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
                                <button onClick={() => dispatch(deleteCartItem(cartItems[key]))}>REMOVE</button>
                            </div>
                            )
                        })}
                    </div>
                    <div className="totals">
                        <div className="cartItemFlex totalValues">
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
                                    name={cartItems.length > 1 ? `${cartItems[cartItemKeys[0]].Name} and more!` : `${cartItems[cartItemKeys[0]].Name}`}
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