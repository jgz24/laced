import React, {useState, useEffect} from "react";
import "./FilterDropDown.css";

export default function FilterDropDown({options}) {
    const [checked,setChecked] = useState({});

    useEffect(() => {
        let initialChecked = {};

        options.map(option => initialChecked[option] = false);

        setChecked(initialChecked);
    }, [options]);

    const handleChange = (event) => {
        console.log("1st", checked);
        console.log([event.target.name]);
        console.log(event.target.checked);
        setChecked({...checked, [event.target.name] : event.target.checked});
        console.log("checked: ", checked);
    }

    return (
            <form className="filterFlexColumn">
                {Object.keys(checked).map(option =>
                    <label key={option} className="categoryLabel">
                        <input name={option} onChange={handleChange} type="checkbox" checked={checked[option]}/>
                    </label>
                )}
            </form>
    );
}
