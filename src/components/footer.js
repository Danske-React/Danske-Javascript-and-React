import React from "react";
class Footer extends React.Component {
    constructor(props) { //1
        super(props);
        this.state= {favoriteColor: "White"}
    }
    // shouldComponentUpdate() {
    //     return false;
    // }
    // changeColor = () => {
    //     this.setState({favoriteColor: "Blue"})
    // }
  
    // static getDerivedStateFromProps(props, state) {
    //     return {favoriteColor: props.favcol}
    // } //2
    
    render() { //3
        return (
            <div>
            <h1>My favoriteColor is {this.state.favoriteColor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            {/* <button type="button" onClick={this.changeColor}> Change Color</button> */}
            </div>
            
        )
    }
    componentDidMount() { //4
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        },2000 )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = " Before the update the value was " + prevState.favoriteColor;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
     "   the updated value is " + this.state.favoriteColor;
    }
   
    
}
export default Footer 