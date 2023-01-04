import React from "react";
import DropInput from "./DropInput";

const Main = () => {

    const array = ['1', '2', '3', '4'];

    return (
        <>
            <div>
                {array.map( ( each ) => <DropInput dropDownKey='1' inputKey='2'/> )}
            </div>
        </>
    )
}

export default Main;