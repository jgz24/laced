import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar({handleSearch, autocompleteArray}) {
    const [filteredSuggestions,setFilteredSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const [formValue,setFormValue] = useState("");


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
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setFormValue(event.currentTarget.innerText);
        handleSearch(event.currentTarget.innerText);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(formValue);
        setFormValue("");
    }

    let suggestionsListComponent;
    
    if (showSuggestions && formValue) {
        // Only show up to 5 suggestions at a given time.
        if (filteredSuggestions.length <= 6) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                
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