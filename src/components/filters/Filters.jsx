import React, {useState} from "react";
import "./Filters.css"
import Filter from "../filter/Filter";
import FilterDropDown from "../filterdropdown/FilterDropDown";

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
        <React.Fragment>
            <div className="container filterFlex"> 
                <Filter type={"Gender"} />
                <Filter type={"Activity"} />
                <Filter type={"Brand"} />
                <Filter type={"Sport"} />
                <Filter type={"Men Sizes"} />
                <Filter type={"Women Sizes"} />
                <Filter type={"Color"} />
                <Filter type={"Price"} />
                <Filter type={"Sort By"} /> 
            </div>
            <div className="container filterFlex">
                <FilterDropDown data={genders} />
                <FilterDropDown data={activities} />
                <FilterDropDown data={brands} />
                <FilterDropDown data={sports} />
                <FilterDropDown data={sizesMen} />
                <FilterDropDown data={sizesWomen} />
                <FilterDropDown data={colors} />
                <FilterDropDown data={prices} />
                <FilterDropDown data={sortBys} /> 
            </div>
        </React.Fragment>
    );  
}

export default Filters;