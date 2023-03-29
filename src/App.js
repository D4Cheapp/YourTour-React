import React from "react";
import {Outlet} from "react-router-dom";
import './pages/Home/components/Header/Header.sass';
import {Navigation} from "./components/Navigation";
import {Footer} from "./components/Footer";

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
