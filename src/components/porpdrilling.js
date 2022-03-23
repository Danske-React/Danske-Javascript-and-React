import React, { useState } from "react";

function Component1() {
    const [user, setUser] = useState("Nishant Gupta");
    return (
        <>
            <h1>{`hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    )
}
function Component2({ user }) {
    return (
        <>
            <h1>this is component 2</h1>
            <Component3 user={user}/>
        </>
    )
}
function Component3({ user }) {
    return (
        <>
            <h1>this is component 3</h1>
            <Component4 user={user}/>
        </>
    )
}
function Component4({ user }) {
    return (
        <>
            <h1>this is component 4</h1>
            <h1>{`hello ${user}! again`}</h1>   
        </>
    )
}

export default Component1

