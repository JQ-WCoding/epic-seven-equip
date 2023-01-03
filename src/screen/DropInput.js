import Dropdown from "react-dropdown";
import React, {useState} from "react";
import {options} from "../options/options";

const DropInput = ( props ) => {
    const [dropDownOptions] = useState( options.map( ( {label} ) => {
        return label
    } ) );

    const onChanged = (args) => {
        console.log( args );
    }

    return (
        <>
            <Dropdown options={dropDownOptions} className="myOptionClassName"
                      onChange={onChanged} key={props.each}/>

            <input key={props.index} type="number" value="0" onChange={onChanged}/>
        </>
    )
}

export default DropInput;