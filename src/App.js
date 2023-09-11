import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavbarSub from "./components/NavbarSub";
import "./App.css";
import "./CSS/Body.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <NavbarSub />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
