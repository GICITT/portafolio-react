import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <MyWork />
    </div>
  );
}
