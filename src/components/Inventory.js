import React from "react";
 // this is a stateless comonent 

class Inventory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h2>The Price of Tomoato is {this.props.price}</h2>
    }

}

export default Inventory