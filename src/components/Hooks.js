import React, {useState , useEffect} from "react";

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

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count +1);
        }, 1000)

    }) // [] will stop the flow of effect after first render 
    return <h1>This count has been rendered {count} times </h1>
}
export default Timer 
