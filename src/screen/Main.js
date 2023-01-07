import React from "react";
import DropInput from "./DropInput";

const Main = () => {

    const inputItems = [
        {dropDownKey: 1, inputKey: 1},
        {dropDownKey: 2, inputKey: 2},
        {dropDownKey: 3, inputKey: 3},
        {dropDownKey: 4, inputKey: 4},
        {dropDownKey: 5, inputKey: 5}
    ];

    const dropInputList = inputItems.map( ( item ) => <DropInput dropDownKey={item.dropDownKey}
                                                                 inputKey={item.inputKey}/> )

    return (
        <>
            <div>
                {array.map( ( each ) => <DropInput dropDownKey={each} inputKey={each}/> )}
                {/*<DropInput dropDownKey={1} inputKey={11}/>*/}
                {/*{dropInputList}*/}
            </div>
        </>
    )
}

export default Main;