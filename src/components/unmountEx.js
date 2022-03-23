import React from "react";

class Container extends React.Component {
    constructor(props) {
        super(props); // state ful component
        this.state = {show: true}
    }
    delHeader = () => {
        this.setState({show: false});
    }

    render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child/>
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}> delete Header</button>
            </div>
        )
    }
}
class Child extends React.Component {
    componentWillUnmount() {
        alert("This component named header is going to be unmounted") // this is a stateless component
    }
    render() {
        return(
            <h1>Hello world</h1>
        )
    }
}

export default Container