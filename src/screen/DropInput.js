import Dropdown from "react-dropdown";
import React, {useState} from "react";
import {options} from "../options/options";

const DropInput = ( props ) => {

    const [dropDownOptions] = useState( options.map( ( {label} ) => {
        return label
    } ) );

    const [maxNumber, setMaxNumber] = useState( "0" );
    const [minNumber, setMinNumber] = useState( "0" );
    const [result, setResult] = useState( 0 );
    const [value, setValue] = useState( "0" );
    const [weightedValue, setWeightedValue] = useState(1);

    const onChanged = ( args ) => {
        const filteredData = options.filter( ( {label} ) => label === args.value )[0];

        switch ( filteredData.division ) {
            case 'percentage':
                console.log( 'percentage' );

                setRangeValue( filteredData.minValue, filteredData.maxValue );
                setWeightedValue( filteredData.weightedValue );
                break;
            case 'pure':
                console.log( 'pure' );

                setRangeValue( 1, 5 );
                setWeightedValue( filteredData.weightedValue );
                break;
            default:
                console.log( 'nothig' );

                setRangeValue( 0, 0 );
                break;
        }
    }

    const inputOnChanged = ( args ) => {
        setValue( args.target.value );
        setResult( args.target.value * weightedValue );
    }

    const setRangeValue = ( min, max ) => {
        setMinNumber( min.toString() );
        setMaxNumber( max.toString() );
        setValue( min.toString() );
    }

    return (
        <>
            <Dropdown options={dropDownOptions}
                      onChange={onChanged} key={props.dropDownKey}/>

            <input key={props.inputKey} type="number" value={value} min={minNumber} max={maxNumber}
                   onChange={inputOnChanged}/>

            <div>변환 수치 : {result}</div>
        </>
    );
}

export default DropInput;