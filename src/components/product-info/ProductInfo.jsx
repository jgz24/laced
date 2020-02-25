import React, {useState, useEffect} from "react";
import "./ProductInfo.css";

export default function ProductType({filters}) {
    const [productTypeHeader,setProductTypeHeader] = useState("");
    const [productQuantity,setProductQuantity] = useState(0);

    useEffect(() => {
        let filterKeys = Object.keys(filters);
        let headerArray = [];

        // Loop through our filters object using its keys.
        // Check which values are equal to true.
        for(let i = 0; i < filterKeys.length; i++) {
            // Get the filter options of each category
            let categories = Object.keys(filters[filterKeys[i]]);
            // If the category are either 'Gender','Activity', 'Brand', or 'Sport',
            // we want to check if their value is true(they're checked in filter)
            // and push the value + •. {E.G. Men•Athletic•Adidas•}
            if (filterKeys[i] === 'Gender' || filterKeys[i] === 'Activity' || filterKeys[i] === 'Brand' || filterKeys[i] === 'Sport') {
                categories.map(category => filters[filterKeys[i]][category] === true ? headerArray.push(`${category}•`) : "");
            }
            // If the category is 'Color' we're checking if their value is true(they're checked in filter)
            // BUT we're also pushing a "+" instead of "•" for filters that have multiple colors.
            else if (filterKeys[i] === 'Color') {
                let tempArray = [];
                categories.map(category => filters[filterKeys[i]][category] === true ? tempArray.push(category) : "");
                for(let i = 1; i <= tempArray.length; i++) {
                    if (tempArray.length > 0 && i === tempArray.length) {
                        headerArray.push(`${tempArray[i-1]}•`)
                    } else {
                        headerArray.push(`${tempArray[i-1]}+`);
                    }
                }
            } 
            // If the category isn't one of the above, then do nothing.
            else{
                    continue;
                }    
        }
        // We want "Shoes" to be displayed at the end of the string.
        headerArray.push("Shoes");

        // Form a string given all the valid filters selected by the user.
        let completeHeader= headerArray.join('');

        // If the string is === 'Shoes' then no valid filters have been chosen so display "All products"
        // Otherwise, display the string with valid filters.
        completeHeader === 'Shoes' ? setProductTypeHeader("All Products") : setProductTypeHeader(completeHeader);

    },[filters]);

    return (
        <div className="container">
            <div className="row">
                <p className="productInfo">{productTypeHeader}</p>
                <div><p className="productQuantity">{`(${productQuantity} Products)`}</p></div>
            </div>
        </div>
    );
}