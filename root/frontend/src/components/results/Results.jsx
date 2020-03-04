import React, {useState, useEffect} from "react";
import "./Results.css"
import ProductInfoHeader from "./product-info-header/ProductInfoHeader";
import Filters from "./filters/Filters";
import Products from "./products/Products";
import {useSelector, useDispatch} from "react-redux";
import { addActiveFilter, deleteActiveFilter} from "../../actions";
import {modifyCheckedFilter} from "../../actions";

export default function Results() {
    const activeFilters = useSelector(state => state.activeFilters);
    const checkedFilters = useSelector(state => state.checkedFilters);
    const products = useSelector(state => state.setProducts);

    const dispatch = useDispatch();

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Get products that satisfy the price filter requirement.
        const handlePriceFilter = () => {
            let filterPrice = activeFilters['Price'];

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
        const handleGeneralFilters = (filteredArray, keys) => {
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
            return tempFilteredArray
        }

        // Sort the products by price.
        const handleSortByFilter = (tempFilteredArray) => {
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

        const handleFilteredProducts = () => {
            let keys = Object.keys(activeFilters);
    
            // No filters so display all products.
            if(keys.length === 0) {
                return products;
            }
    
            let tempFilteredArray = [];
    
            // Handle price filter first and get products that match.
            if (keys.includes('Price')) {
                tempFilteredArray = handlePriceFilter();
    
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
                tempFilteredArray = handleGeneralFilters(tempFilteredArray,keys);
            } else {
                // Otherwise, filter the original products.
                tempFilteredArray = handleGeneralFilters(products,keys);
            }
            
            // If filters include sort, do it last.
            if (keys.includes('Sort By')) {
                tempFilteredArray = handleSortByFilter(tempFilteredArray);
            }
    
            return tempFilteredArray;
        }

        setFilteredProducts(handleFilteredProducts());

    },[products,activeFilters,checkedFilters]);

    // Handles the case where the user clicks a filter option
    // from the drop down 
    const handleCheckedChange = (category, filterOption, isChecked) => {
        // Determine if the selected filter should
        // be added or removed from active filters.
        if(isChecked) {
            dispatch(addActiveFilter(category,filterOption));
        }
        else {
            dispatch(deleteActiveFilter(category,filterOption));
        }   
        dispatch(modifyCheckedFilter(category,filterOption,isChecked));
    };

    // Handles the case where user clicks an active filter
    // meaning it should be set to false.
    const handleActiveFilterClick = (category, filterOption) => {
        dispatch(deleteActiveFilter(category,filterOption));
        dispatch(modifyCheckedFilter(category,filterOption,false));
    }

    return (
        <React.Fragment>
            <ProductInfoHeader products={filteredProducts} filters={checkedFilters} />
            <Filters filters={checkedFilters} handleCheckedChange={handleCheckedChange} handleActiveFilterClick={handleActiveFilterClick} />
            <Products products={filteredProducts}/>
        </React.Fragment>
    );
}