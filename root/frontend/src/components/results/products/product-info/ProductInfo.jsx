import React, {useState,useEffect} from "react";
import "./ProductInfo.css";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { addCartItem, deleteCartItem } from "../../../../actions";

export default function ProductInfo({history, location}) {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    const {Name,Sport,Activity,Img,Color,Size,Quantity,Brand,Id} = location.state;
    const [cartButton,setCartButton] = useState("");
    const [suggestedProducts,setSuggestedProducts] = useState([]);

    const handleBack = () => {
        history.goBack();
    }

    useEffect(() => {
        let vals = Object.keys(cartItems);
        let cartButton = "addCartButton";

        if(vals.length !== 0) {
            for (let val in vals) {
                if(cartItems[val].Id === Id) {
                    cartButton="deleteCartButton";
                } else {
                    continue;
                }
            }
        }
        setCartButton(cartButton);

    },[cartItems, Id])

    useEffect(() => {
        // If shoe is not associated with a sport then
        // just search by brand. 
        let url = `http://localhost:8080/search/${Brand}`;

        // If shoe is associated with a sport, then search
        // shoes based on that sport
        if(Sport !== "") {
            url = `http://localhost:8080/search/${Sport}`;
        }

        fetch(url, {
          method: "GET"
        })
          .then(res => res.json())
          .then(json => {
            setSuggestedProducts(json.filter(product => product.Name !== Name));
          })
          .catch(err => console.log(err));
      }, [Name,Sport,Activity,Brand]);

      
      const handleCartClick = () => {
        if(cartButton === "addCartButton") {
            dispatch(addCartItem(location.state));
            setCartButton("deleteCartButton")
        } else {
            dispatch(deleteCartItem(location.state));
            setCartButton("addCartButton");
        }
      };

    let suggested = <div className="similarProducts"> 
                    {suggestedProducts.length > 0 && Sport !== "" ? <h2>{`Other ${Sport} Products`}</h2> : <h2>{`Other ${Brand} Products`}</h2>}
                    {suggestedProducts.map((product,idx) => {
                        return (
                            <Link key={idx} to={{
                                pathname: `/product/${product.Name}`,
                                state: product
                            }}><img src={product.Img} title={product.Name} alt="" height="100" width="100"></img>
                            </Link> 
                        )
                    })}
                    </div>;

    return (
        <div className="container">
            <div className="productInfoContainer">
                <div className="goBack">
                    <button className="goBackButtonLogo" onClick={handleBack}></button>
                    <button className="goBackButton" onClick={handleBack}>Back</button>
                </div>
                <div className="productInfoFlex">
                    <img className="productImage" src={Img} alt="" height="350" width="350"></img>
                    <div className="productInformation">
                        <h2>{Name}</h2>
                        <p>{`${Sport}` || `${Activity}`}</p>
                        <p>{`Size: ${Size}`}</p>
                        <p>{`Color: ${Color}`}</p>
                        <p>{`${Quantity} in stock!`}</p>
                        <p>{`$${location.state.Price}`}</p>
                        <button className={cartButton} onClick={handleCartClick}></button> 
                    </div>
                </div>
            </div>
            {suggested} 
        </div>
    )
}