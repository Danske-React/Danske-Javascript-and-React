
import React from "react";
import Car from "./components/car";
import Footer from "./components/footer";
import MyForm from "./components/form";
import Header from "./components/header";
import Inventory from "./components/Inventory";
import Score from "./components/score";
import Container from "./components/unmountEx";
import Hoc from "./components/higherOrder";

function App() {
  return (
    <div>
      <Header />
      <p>this is the body of our react apps</p>
      <Score score="70"/>

      {/* <Container/> */}
      {/* <Car /> */}
      {/* <Inventory price="100" />
      <Inventory price="120" />
      <Inventory price="150" /> */}

      {/* <Footer favcol = "blue"/> */}
    </div> // jsx javascript xml language and it allows us to use html tags inside a js file 
  );
}
// App = Hoc(Header); // hoc

export default App;
