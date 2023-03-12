import React from "react";
import Navigation from "./components/Navigation";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import './sass/home/sections/header.sass';

function App() {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default App;
