import React, {Component} from "react";


class Car extends React.Component {
    constructor(){
        super();
        this.state = {brand: "Ford" , Color: "White", Model :"EcoSport"}
    }
    render() {
        return <h2>I own a {this.state.brand} {this.state.Model} which is {this.state.color} in color</h2>
    }

}

export default Car