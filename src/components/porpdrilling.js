import React, { useState, useContext, createContext } from "react";

function Component1() {
    const ContextCreator = createContext();
    const [user, setUser] = useState("Nishant Gupta");
    return (
        <ContextCreator.Provider value={user}>
            <div>
                <h1>{`hello ${user}!`}</h1>
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
    const user = useContext(ContextCreator)
    return (
        <>
            <h1>this is component 4</h1>
            <h1>{`hello ${user}! again`}</h1>
        </>
    )
}

export default Component1

