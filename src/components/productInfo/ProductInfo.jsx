import React, {useState} from "react";
import "./ProductInfo.css";

export default function ProductType() {
    const [productType,setProductType] = useState("All Products");
    const [productQuantity,setProductQuantity] = useState(0);

    return (
        <div>
            <div><p className="productInfo">{productType}</p></div>
            <div><p className="productQuantity">{`(${productQuantity}) Products`}</p></div>
        </div>
    );
}