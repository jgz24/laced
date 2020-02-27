import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar({handleSearch}) {
    const [formValue,setFormValue] = useState("");

    const handleChange = (event) => {
        setFormValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(formValue);
        setFormValue("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="searchBar" onChange={handleChange} value={formValue} type="text" name="search"></input>
                    <button onClick={handleSubmit} className="searchButton" type="submit"></button>
                </div>
            </form>
        </div>
    );
}