import React from "react";

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state= {
        city: "London",
        street: "15th Avenue",
        road: "Hethorow main road"
    }
    render() {
        return(
            <MyContext.Provider value={{state: this.state}}>
                <City/>
                <Street/>
                <Road/>
            </MyContext.Provider>

        )
    }
}
class City extends React.Component {
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi welcome to {context.state.city}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
class Street extends React.Component {
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi welcome to {context.state.street}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
class Road extends React.Component {
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi welcome to {context.state.road}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default MyProvider