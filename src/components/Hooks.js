import React, { useState, useEffect } from "react";

// function FavColour() {
//     const [color, setColor] = useState("Red");
//     return(
//         <div>
//             <h1>{color}</h1>
//             <button onClick={() =>  setColor("Blue")}>Blue</button>
//             <button onClick={() =>  setColor("Black")}>Black</button>
//             <button onClick={() =>  setColor("white")}>White</button>
//             <button onClick={() =>  setColor("Green")}>Green</button>
//             <button onClick={() =>  setColor("Purple")}>Purple</button>
//             <button onClick={() =>  setColor("Pink")}>pink</button>

//         </div>
//     )
// }

// export default FavColour
function Timer() {
    const [count, setCount] = useState(0);
    const [calculations, setCalculations] = useState(0);

    useEffect(() => {
        setCalculations(() => count * 2);
    }, [count]) // [] will stop the flow of effect after first render 
    return (
        <div>
            <h1>This count has been rendered {count} times </h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>calculations : {calculations}</p>
        </div>


    )
}
export default Timer 
