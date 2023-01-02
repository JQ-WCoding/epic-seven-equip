import Dropdown from "react-dropdown";
import React, {useState} from "react";
import {options} from "../options/options";

const DropInput = ( props ) => {
    const [dropDownOptions] = useState( options.map( ( {label} ) => {
        return label
    } ) );

    const onChanged = () => {

    }

    return (
        <>
            <Dropdown options={dropDownOptions} className="myOptionClassName"
                      onChange={onChanged} key={each}/>

            <input key={i} type="number" value="0" onChange={onChanged}/>
        </>
    )
}

export default DropInput;