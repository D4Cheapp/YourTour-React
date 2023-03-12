import React from "react";
import './sass/home/sections/header.sass';
import Navigation from "./components/Navigation";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  );
}

export default App;
