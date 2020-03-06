import React, {useState} from "react";
import "./SearchBar.css";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchApiCall} from "../../../actions";

function SearchBar({autocompleteArray, history}) {
    const dispatch = useDispatch();

    const [filteredSuggestions,setFilteredSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const [formValue,setFormValue] = useState("");

    // Look for individual shoes via search bar.
    // Takes in all filter options other than
    // "Sort By"
    const handleSearch = async searchTerm => {
      dispatch(searchApiCall(searchTerm,"search"));
    }

    const handleChange = (event) => {
        const formValue = event.target.value;
        const filteredSuggestions = autocompleteArray.filter(
            suggestion => 
            suggestion.toLowerCase().indexOf(formValue.toLowerCase()) > -1
        )

        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setFormValue(formValue);
    }

    const handleClick = (event) => {
        let tempFormValue = event.currentTarget.innerText;

        setFilteredSuggestions([]);
        setShowSuggestions(false);
        handleSearch(tempFormValue);
        setFormValue("");
        history.push(`/?search=${tempFormValue}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(formValue);
        setFormValue("");
        history.push(`/?search=${formValue}`);
    }

    let suggestionsListComponent;
    
    if (showSuggestions && formValue) {
        let tempFilteredSuggestions = filteredSuggestions; 
        // Only show up to 5 suggestions at a given time.
        if (filteredSuggestions.length > 5) {
          tempFilteredSuggestions = filteredSuggestions.slice(1,6);
        }
        if (tempFilteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {tempFilteredSuggestions.map((suggestion) => {
                
                return (
                  <li  key={suggestion} onClick={handleClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } 
    }

    return (
        <div>
            <form className="search" method="GET" onSubmit={handleSubmit}>
                <input className="searchBar" onChange={handleChange} value={formValue} type="text" name="search" autoComplete="off"></input>
                <button onClick={handleSubmit} className="searchButton" type="submit"></button>
                {suggestionsListComponent}
            </form>
        </div>
    );
}

export default withRouter(SearchBar);