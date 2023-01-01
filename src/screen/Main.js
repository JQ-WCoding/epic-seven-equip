import React, {useState} from "react";
import Dropdown from 'react-dropdown';
import {options} from "../options/options";

const Main = () => {

    const [dropDownOptions] = useState( options.map( ( {label} ) => {
        return label
    } ) );

    const array = ['1', '2', '3', '4'];


    const onChanged = ( args ) => {

    }

    return (
        <>
            <div>
                {array.map( ( each ) => <Dropdown options={dropDownOptions} className="myOptionClassName"
                                                  onChange={onChanged} key={each}/>
                )}

                {array.map( ( i ) => <input key={i} type="number" value="0" onChange={onChanged}/> )}
            </div>
        </>
    )
}

export default Main;