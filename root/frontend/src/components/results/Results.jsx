import React, {useState} from "react";
import "./Results.css"
import ProductInfoHeader from "../product-info-header/ProductInfoHeader";
import Filters from "../filters/Filters";
import Products from "../products/Products";

export default function Results({products}) {
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
            Grey: false,
            Green: false,
            Orange: false
        },
        Brand: {
            Nike: false,
            Adidas: false,
            Vans: false,
            Converse: false
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
        "Sort By": {
            "Low-High": false,
            "High-Low": false
        }
    });

    // This function handles filters that can only have one 
    // option selected at any given time.
    const handleMultipleChecks = (tempCheckedFilters, category, filterOption) => {
        if (category === 'Gender' || category === 'Activity' || category === 'Brand' 
            || category === 'Sport' || category === 'Price' || category === 'Sort By') {
                let filterArray = Object.values(tempCheckedFilters[category]);

                // Count the number of "true" values.
                let trueCountArray = filterArray.filter(bool => bool === true);

                // If there's a "true" value already and the recently selected
                // filter is false, then we know that another value
                // is already selected so we want to set that value to false
                // and set the recently selected filter to true.
                if(trueCountArray.length === 1 && tempCheckedFilters[category][filterOption] === false) {
                    let categoryOptions = Object.keys(tempCheckedFilters[category]);
                    //Set all filter values to false
                    categoryOptions.map(filter => tempCheckedFilters[category][filter] = false);
                    //Set the recently selected filter to be true
                    tempCheckedFilters[category][filterOption] = true;
                }
        }
        return tempCheckedFilters;
    }; 

    // Handles the case where the user clicks a filter option
    // from the drop down.
    const handleCheckedChange = (category, filterOption, isChecked) => {
        // Create a deep copy of the checkedFilters object
        let tempCheckedFilters = JSON.parse(JSON.stringify(checkedFilters));

        tempCheckedFilters = handleMultipleChecks(tempCheckedFilters,category,filterOption);

        // Change the value of the filter to true
        tempCheckedFilters[category][filterOption] = isChecked;

        setCheckedFilters(tempCheckedFilters);
    };

    // Handles the case where user clicks an active filter
    // meaning it should be set to false.
    const handleActiveFilterClick = (category, filterOption) => {
        // Create a deep copy of the checkedFilters object
        let tempCheckedFilters = JSON.parse(JSON.stringify(checkedFilters));

        // Change the value of the filter to be false
        tempCheckedFilters[category][filterOption] = false;

        setCheckedFilters(tempCheckedFilters);
    }

    console.log("zz",checkedFilters);

    return (
        <React.Fragment>
            <div className="lineBreak"></div>
            <ProductInfoHeader products={products} filters={checkedFilters} />
            <Filters filters={checkedFilters} handleCheckedChange={handleCheckedChange} handleActiveFilterClick={handleActiveFilterClick} />
            <Products products={products}/>
        </React.Fragment>
    );
}