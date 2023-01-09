import React from "react";
import DropInput from "./DropInput";

const Main = () => {

    // const inputItems = [
    //     {dropDownKey: 1, inputKey: 1},
    //     {dropDownKey: 2, inputKey: 2},
    //     {dropDownKey: 3, inputKey: 3},
    //     {dropDownKey: 4, inputKey: 4},
    //     {dropDownKey: 5, inputKey: 5}
    // ];

    // const dropInputList = inputItems.map( ( item ) => <DropInput dropDownKey={item.dropDownKey}
    //                                                              inputKey={item.inputKey}/> )

    const onClick = () => {

    }

    return (
        <>
            <div>
                {/*{array.map( ( each ) => <DropInput dropDownKey={each} inputKey={each}/> )}*/}
                <DropInput dropDownKey={1} inputKey={11}/>
                <DropInput dropDownKey={2} inputKey={12}/>
                <DropInput dropDownKey={3} inputKey={13}/>
                <DropInput dropDownKey={4} inputKey={14}/>
            </div>


            <div>
                <p>장비 점수</p>
                <button onClick={onClick}>계산하기</button>
                <input type="number" readOnly={true}/>
            </div>
        </>
    )
}

export default Main;