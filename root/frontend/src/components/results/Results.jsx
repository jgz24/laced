import React, {useState, useEffect} from "react";
import "./Results.css"
import ProductInfoHeader from "../product-info-header/ProductInfoHeader";
import Filters from "../filters/Filters";
import Products from "../products/Products";

export default function Results({products}) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeFilters,setActiveFilters] = useState({});
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
            Purple: false,
            Yellow: false,
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

    useEffect(() => {
        setFilteredProducts(products);
    },[products]);

    // This function only allows filter categories to have
    // one option selected at a given time.
    const handleMultipleChecks = (tempCheckedFilters, category, filterOption) => {
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
        return tempCheckedFilters;
    }; 


    // If filter is set to true, add it to this object.
    // If filter is set to false and was already in the object, delete it.
    const handleActiveFilters = (isChecked,category,filterOption) => {
        let tempActiveFilters = {...activeFilters};

        if(isChecked) {
            tempActiveFilters[category] = filterOption;
        }
        else {
            delete tempActiveFilters[category];
        }   

        return tempActiveFilters;
    }

    // Get products that satisfy the price filter requirement.
    const handlePriceFilter = (filterPrice) => {
        let tempPriceArray = [];

        for(let i = 0; i < products.length; i++) {
            let price = parseInt(products[i]['Price']);
            if(filterPrice === '$1-$50' && price > 50) {
                continue;
            }
            else if (filterPrice === '$50-$100' && (price < 50 || price > 100)) {
                continue;
            }
            else if(filterPrice === '$100-$150' && (price < 100 || price > 150)) {
                continue;
            }
            else if(filterPrice === '$150-$200' && (price < 150 || price > 200)) {
                continue;
            }
            else if(filterPrice === '$200+' && price < 200) {
                continue;
            }
            // Meets criteria, add to array.
            tempPriceArray.push(products[i]);
        }
        return tempPriceArray;
    }

    // Get products with filters "Gender, "Activity", "Color",
    // "Brand", "Sport" and "Size"
    const handleGeneralFilters = (filteredArray, activeFilters) => {
        let keys = Object.keys(activeFilters);
        let tempFilteredArray = [];

        for(let i = 0; i<filteredArray.length; i++) {
            for(let j = 0; j<keys.length; j++) {
                // Product doesn't have a sort by property so skip this key.
                // Already handle price so skip.
                if(keys[j] !== 'Sort By' && keys[j] !== 'Price') {
                    // For keys (filter category) not equal to Price or Sort by.
                    // Doesnt meet filter requirement, don't add to filtered list.
                    if(activeFilters[keys[j]] !== filteredArray[i][[keys[j]]] && !filteredArray[i][[keys[j]]].includes(activeFilters[keys[j]])) {
                        break;
                    }  
                }
                // Add product to filtered list if it meets all filters.
                if(j === keys.length - 1) {
                    tempFilteredArray.push(filteredArray[i]);            
                }
            }
        }
        return tempFilteredArray;
    }

    // Sort the products by price.
    const handleSortByFilter = (activeFilters,tempFilteredArray) => {
        // Sort in ascending order.
        if(activeFilters['Sort By'] === "Low-High") {
            tempFilteredArray.sort((a, b) => { return a.Price - b.Price });
        } 
        // Sort in descending order.
        else if(activeFilters['Sort By'] === "High-Low") {
            tempFilteredArray.sort((a, b) => { return b.Price - a.Price });
        }
        return tempFilteredArray;
    }

    const handleFilteredProducts = (activeFilters) => {
        let keys = Object.keys(activeFilters);

        // No filters so display all products.
        if(keys.length === 0) {
            return products;
        }

        let tempFilteredArray = [];

        // Handle price filter first and get products that match.
        if (keys.includes('Price')) {
            tempFilteredArray = handlePriceFilter(activeFilters['Price']);

            // Don't need to check for price filter as it was already handled.
            keys = keys.filter(key => key !== 'Price');

            // If the only filter we have is price, then return now.
            if(keys.length === 0) {
                return tempFilteredArray;
            }
        }

        // If we filtered products by price, then use
        // those products to be filtered in the next steps.
        if(tempFilteredArray.length > 0) {
            tempFilteredArray = handleGeneralFilters(tempFilteredArray,activeFilters);
        }
        
        // Otherwise, filter the original products.
        tempFilteredArray = handleGeneralFilters(products,activeFilters);

        // If filters include sort, do it last.
        if (keys.includes('Sort By')) {
            tempFilteredArray = handleSortByFilter(activeFilters,tempFilteredArray);
        }

        return tempFilteredArray;
    }

    // Handles the case where the user clicks a filter option
    // from the drop down 
    const handleCheckedChange = (category, filterOption, isChecked) => {
        // Create a deep copy of the checkedFilters object
        let tempCheckedFilters = {...checkedFilters};

        tempCheckedFilters = handleMultipleChecks(tempCheckedFilters,category,filterOption);

        // Change the value of the filter to true or false
        tempCheckedFilters[category][filterOption] = isChecked;

        // For checkboxes to set state,
        // white = false, black = true.
        setCheckedFilters(tempCheckedFilters);
    
        // Determine if the selected filter should
        // be added or removed from active filters.
        let tempActiveFilters = handleActiveFilters(isChecked,category,filterOption);

        setActiveFilters(tempActiveFilters);

        // Determine which products match based
        // on the filters given.
        let tempFilteredProducts = handleFilteredProducts(tempActiveFilters);

        setFilteredProducts(tempFilteredProducts);
    };

    // Handles the case where user clicks an active filter
    // meaning it should be set to false.
    const handleActiveFilterClick = (category, filterOption) => {
        // Create a deep copy of the checkedFilters object
        let tempCheckedFilters = {...checkedFilters};

        // Change the value of the filter to be false
        tempCheckedFilters[category][filterOption] = false;

        // For checkboxes to set state,
        // white = false, black = true.
        setCheckedFilters(tempCheckedFilters);

        // The selected filter should be deleted
        // from the active filters list.
        let tempActiveFilters = handleActiveFilters(false, category, filterOption);

        setActiveFilters(tempActiveFilters);

        // Determine which products match based
        // on the filters given.
        let tempFilteredProducts = handleFilteredProducts(tempActiveFilters);

        setFilteredProducts(tempFilteredProducts);
    }

    return (
        <React.Fragment>
            <ProductInfoHeader products={filteredProducts} filters={checkedFilters} />
            <Filters filters={checkedFilters} handleCheckedChange={handleCheckedChange} handleActiveFilterClick={handleActiveFilterClick} />
            <Products products={filteredProducts}/>
        </React.Fragment>
    );
}