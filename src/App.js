
import React from "react";
import Car from "./components/car";
import Footer from "./components/footer";
import MyForm from "./components/form";
import Header from "./components/header";
import Inventory from "./components/Inventory";
import Score from "./components/score";
import Container from "./components/unmountEx";
import Hoc from "./components/higherOrder";
import FavColour from "./components/Hooks";
import Timer from "./components/Hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Layout from "./components/layout";
import About from "./components/about";
import Component1 from "./components/porpdrilling";
import MyProvider from "./components/address";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <MyProvider/>
      <Component1 />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout/>}></Route>
    //     <Route path='/home' element={<Home />}></Route>
    //     <Route path='/about' element={<About/>}></Route>
    //     <Route path='/inventory' element={<Inventory price= "100"/>}></Route>
    //     <Route path="/prop" element={<Component1/>}></Route>
    //   </Routes>



    // </BrowserRouter> 



    // <div>
    //   <Header />
    //   <p>this is the body of our react apps</p>
    //   <Timer/>





    //   {/* <Score score="70"/> */}
    //   {/* <Container/> */}
    //   {/* <Car /> */}
    //   {/* <Inventory price="100" />
    //   <Inventory price="120" />
    //   <Inventory price="150" /> */}

    //   {/* <Footer favcol = "blue"/> */}
    // </div> // jsx javascript xml language and it allows us to use html tags inside a js file 
  );
}
// App = Hoc(Header); // hoc

export default App;
