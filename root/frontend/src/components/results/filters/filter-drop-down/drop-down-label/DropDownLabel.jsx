import React from 'react';
import "./DropDownLabel.css"

export default function DropDownLabel({option, category, checked, handleCheckedChange}) {
    const handleChange = (event) => {
        let name = event.target.name;
        let isChecked = event.target.checked;

        handleCheckedChange(category, name, isChecked);
    }

    return  (
        <React.Fragment>
            <label className="categoryLabel">
                <input name={option} onChange={handleChange} type="checkbox" checked={checked}/>
                {option}
            </label>
        </React.Fragment>
    );               
}