import React from "react";
// this is a stateful component 

class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "VW",
            model: "Golf", color: "Blue", price: "$10000"
        }
    }
    ChangeColor = () => {
       this.setState({color:"Red"}) 
    }
    NextCar = () => {
        this.setState({
            brand: "Ford",
            model: "Ecosport", color: "Orange", price: "$8000"
        }) 
     }
    render() {
        return (
            <div>
                <h2>Hello this is a {this.state.brand}  {this.state.model} car. </h2>
                <p>
                    which is {this.state.color} in color and it costs {this.state.price}
                </p>
                <button type="button" onClick={this.ChangeColor}>Change Color</button>
                <button type="button" onClick={this.NextCar}>Next</button>

            </div>
        )
    }

}

// class Garage extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>who lives in a garage</h1>
//                 <Car type="SUV"/>
//             </div>
//         )
//     }
// }

export default Car
