
import React from "react";
import Car from "./components/car";
import Footer from "./components/footer";
import MyForm from "./components/form";
import Header from "./components/header";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div>
      <Header />
      <p>this is the body of our react apps</p>
      <MyForm />
      <Car />
      <Inventory price="100" />
      <Inventory price="120" />
      <Inventory price="150" />

      <Footer />
    </div> // jsx javascript xml language and it allows us to use html tags inside a js file 
  );
}

export default App;
