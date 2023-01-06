import Dropdown from "react-dropdown";
import React, {useState} from "react";
import {options} from "../options/options";

const DropInput = ( props ) => {
    const [dropDownOptions] = useState( options.map( ( {label} ) => {
        return label
    } ) );

    const onChanged = ( args ) => {
        const filteredData = options.filter( ( {label} ) => label === args.value );

        console.log( 'filteredData', filteredData );
    }

    return (
        <>
            <Dropdown options={dropDownOptions}
                      onChange={onChanged} key={props.dropDownKey}/>

            <input key={props.inputKey} type="number" defaultValue="0"/>
        </>
    )
}

export default DropInput;