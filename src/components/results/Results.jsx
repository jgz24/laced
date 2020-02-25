import React, {useState} from "react";
import "./Results.css"
import ProductInfo from "../product-info/ProductInfo";
import Filters from "../filters/Filters";

export default function Results() {
    const [checkedFilters,setCheckedFilters] = useState({
        Gender : {
            Men : false,
            Women: false
        },
        Activity: {
            Athletic: false,
            Casual: false
        },
        Color: {
            Black: false,
            White: false,
            Red: false,
            Blue: false,
            Gray: false,
            Green: false,
            Orange: false
        },
        Brand: {
            Nike: false,
            Adidas: false,
            Vans: false
        },
        Sport: {
            Basketball: false,
            Baseball: false,
            Golf: false,
            Football: false,
            Soccer: false
        },
        Size: {
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false
        },
        Price: {
            "$1-$50" : false,
            "$50-$100": false,
            "$100-$150": false,
            "$150-$200": false,
            "$200+" : false
        },
        Sort: {
            "Price(Low-High)": false,
            "Price(High-Low)": false
        }
    });

    // This function handles filters that can only have one 
    // option selected at any given time.
    const handleMultipleChecks = (tempCheckedFilters, category, filterOption) => {
        if (category === 'Gender' || category === 'Activity' || category === 'Brand' 
            || category === 'Sport' || category === 'Price' || category === 'Sort') {
                let filterArray = Object.values(tempCheckedFilters[category]);
                let trueCount = 0;

                // Count the number of "true" values.
                filterArray.map(bool => bool === true ? trueCount=trueCount+1 : trueCount);

                // If there's a "true" value already and the recently selected
                // filter is false, then we know that another value
                // is already selected so we want to set that value to false
                // and set the recently selected filter to true.
                if(trueCount === 1 && tempCheckedFilters[category][filterOption] === false) {
                    let categoryOptions = Object.keys(tempCheckedFilters[category]);
                    //Set all filter values to false
                    categoryOptions.map(filter => tempCheckedFilters[category][filter] = false);
                    //Set the recently selected filter to be true
                    tempCheckedFilters[category][filterOption] = true;
                }
        }
        return tempCheckedFilters;
    };

    const handleCheckedChange = (category, filterOption, isChecked) => {
        // Create a deep copy of the checkedFilters object
        let tempCheckedFilters = JSON.parse(JSON.stringify(checkedFilters));

        tempCheckedFilters = handleMultipleChecks(tempCheckedFilters,category,filterOption);

        // Change the value of the filter to true
        tempCheckedFilters[category][filterOption] = isChecked;

        setCheckedFilters(tempCheckedFilters);
    };

    console.log("zz",checkedFilters);

    return (
        <React.Fragment>
            <ProductInfo filters={checkedFilters} />
            <div className="container lineBreak-products"></div>
            <Filters filters={checkedFilters} handleCheckedChange={handleCheckedChange} />
            <div className="container lineBreak-products"></div>
        </React.Fragment>
    );
}