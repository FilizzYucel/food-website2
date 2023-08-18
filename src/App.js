import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Foter from "./components/Foter";

function App() {
  return (
    <div >
      
      <Navbar></Navbar>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
      <Foter/>


    </div>
  );
}

export default App;
