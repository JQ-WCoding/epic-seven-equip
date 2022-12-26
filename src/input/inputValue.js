import React from "react";
import Dropdown from 'react-dropdown';

const inputValue = () => {

    const options = ['공격력(%)',
        '공격력',
        '방어력(%)',
        '방어력',
        '치명타 확률',
        '치명타 피해'];

    const equipmentOptions = [
        {
            value: 'attack',
            label: '공격력'
        },
        {
            value: 'attackPercentage',
            label: '공격력(%)'
        }
    ]

    const onChanged = () => {

    }

    return (
        <>
            <div>
                <Dropdown options={
                    equipmentOptions.map(
                        ( {label} ) => {
                            return label
                        } )} className="myOptionClassName"
                          onChange={onChanged}
                          index="1"/>
                <input id="" type="number" value="0"/>
            </div>
        </>
    )
}

export default inputValue;