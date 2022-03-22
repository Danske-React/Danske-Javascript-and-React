
import React from "react";
import Car from "./components/car";
import Footer from "./components/footer";
import MyForm from "./components/form";
import Header from "./components/header";

function App() {
  return (
    <div>
     <Header/>
     <p>this is the body of our react apps</p>
     <MyForm/>
     <Car/>
     <Footer/>
    </div> // jsx javascript xml language and it allows us to use html tags inside a js file 
  );
}

export default App;
