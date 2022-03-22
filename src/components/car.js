import React from "react";


class Car extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {brand: "Ford" , Color: "White", Model :"EcoSport"}
    // }
    render() {
        return <h2>Hello this is a {this.props.type}car</h2>
    }

}

class Garage extends React.Component{
    render() {
        return(
            <div>
                <h1>who lives in a garage</h1>
                <Car type="SUV"/>
            </div>
        )
    }
}

export default Garage
