import React, {useState} from "react";
import "./Filters.css"
import Filter from "../filter/Filter";

function Filters() {
    const filters = [{ category : 'Gender', options: ["Men","Women"]},
                { category : 'Activity', options: ["Athletic", "Casual"]},
                { category: 'Brand', options: ["Nike","Adidas","Vans"]},
                { category : 'Sport', options: ["Basketball", "Baseball","Golf","Football","Soccer"]},
                { category : 'Size', options : ["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12"]},
                { category : 'Color', options: ["Black","White","Red","Blue","Gray","Green","Orange"]},
                { category : 'Price', options: ["$1-$50","$50-$100","$100-$150","$150-$200","$200-$250","$250-$300","$300+"]},
                {category : 'Sort By', options : ["Newest", "Price(High-Low)", "Price(Low-High)", "Top Sellers"]}
            ];

    const [gender,setGender] = useState("");
    const [activity, setActivity] = useState("");
    const [brand,setBrand] = useState("");
    const [sport,setSport] = useState("");
    const [size,setSize] = useState("");
    const [color,setColor] = useState("");
    const [price,setPrice] = useState(0);
    const [sortBy,setSortBy] = useState("");

    return ( 
        <div className="container">
            <div className="filterFlex">
                {filters.map(filter => <Filter type={filter.category} data={filter.options} />)}
            </div>
        </div>
    );  
}

export default Filters;