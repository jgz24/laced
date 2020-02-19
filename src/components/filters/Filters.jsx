import React, {useState} from "react";
import Filter from "../filter/Filter";

function Filters() {
    const genders = ["Men","Women"]
    const activities = ["Athletic", "Casual"];
    const brands = ["Nike","Adidas","Vans"];
    const sports = ["Basketball", "Baseball","Golf","Football","Soccer"]
    const sizesMen = ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12"];
    const sizesWomen = ["3W","3.5W","4W","4.5W","5W","5.5W","6W","6.5W","7W","7.5W","8W","8.5W","9W","9.5W","10W","10.5W","11W","11.5W","12W"];
    const colors = ["Black","White","Red","Blue","Gray","Green","Orange"];
    const prices = ["Less than $50","$50-$100","$100-$150","$150-$200","$200-$250","$250-$300","$300 or more"];
    const sortBys = ["Newest", "Price(High-Low)", "Price(Low-High)", "Top Sellers"];

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
            <Filter data={genders} type={"Gender"} />
            <Filter data={activities} type={"Activity"} />
            <Filter data={brands} type={"Brand"} />
            <Filter data={sports} type={"Sport"} />
            <Filter data={sizesMen} type={"Men Sizes"} />
            <Filter data={sizesWomen} type={"Women Sizes"} />
            <Filter data={colors} type={"Color"} />
            <Filter data={prices} type={"Price"} />
            <Filter data={sortBys} type={"Sort By"} /> 
        </div>
    );  
}

export default Filters;