import React from "react";
class Footer extends React.Component {
    constructor(props) { //1
        super(props);
        this.state= {favoriteColor: "White"}
    }
  
    static getDerivedStateFromProps(props, state) {
        return {favoriteColor: props.favcol}
    } //2
    
    render() { //3
        return (
            <h1>My favoriteColor is {this.state.favoriteColor}</h1>
        )
    }
    componentDidMount() { //4
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        },2000 )
    }
   
    
}
export default Footer 