// function add(a,b) {
//     return a+b
// } // function creating 

// function HOC(a, add) {
//     return add(a,20)
// } //higher order function 

// HOC(13,add) // function call
import React from "react";

export default function Hoc(HocComponent) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <h1>This is the higher order components</h1>
                    <HocComponent/>
                </div>
            )
        }
    }
}

