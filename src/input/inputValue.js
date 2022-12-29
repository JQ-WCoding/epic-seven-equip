import React from "react";
import Dropdown from 'react-dropdown';

const inputValue = () => {

    let array = ['1', '2', '3', '4', '5'];

    const equipmentOptions = [
        {
            value: 'attack',
            label: '공격력'
        },
        {
            value: 'attackPercentage',
            label: '공격력(%)'
        },
        {
            value: 'defend',
            label: '방어력'
        },
        {
            value: 'defendPercentage',
            label: '방어력(%)'
        },
        {
            value: 'hp',
            label: '생명력'
        },
        {
            value: 'hpPercentage',
            label: '생명력(%)'
        },
        {
            value: 'criticalPercentage',
            label: '치명타 확률(%)'
        },
        {
            value: 'criticalDamagePercentage',
            label: '치명타 피해(%)'
        },
        {
            value: 'hitPercentage',
            label: '효과적중(%)'
        },
        {
            value: 'resistancePercentage',
            label: '효과저항(%)'
        },
        {
            value: 'speed',
            label: '속도'
        },
    ]

    const onChanged = (args) => {
        console.log( args );
        if ( args ) {

        }
    }

    return (
        <>
            <div>
                {array.map( () => <Dropdown options={
                    equipmentOptions.map(
                        ( {label} ) => {
                            return label
                        } )} className="myOptionClassName"
                                            onChange={onChanged}
                                            index="1"/>
                )}

                {array.map( ( i ) => <input id={i} type="number" value="0"/> )}

            </div>
        </>
    )
}

export default inputValue;