import React, { useState, useContext, createContext } from "react";
const ContextCreator = createContext();



function Component1() {
    const names = ["nishant", "Skhasy", "Vijay"]
    return (
        <ContextCreator.Provider value={names}>
            <div>
                <h1>{`hello ${names}!`}</h1>
                <Component4 />
            </div>

        </ContextCreator.Provider>
    )
}
function Component2() {
    return (
        <>
            <h1>this is component 2</h1>
            <Component3 />
        </>
    )
}
function Component3() {
    return (
        <>
            <h1>this is component 3</h1>
            <Component4 />
        </>
    )
}
function Component4() {
    const names = useContext(ContextCreator)
    return (
        <>
            <h1>this is component 4</h1>
            <h1>{`hello ${names}! again`}</h1>
        </>
    )
}

export default Component1

