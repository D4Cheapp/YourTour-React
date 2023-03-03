import React from 'react';
import Navigation from "./Navigation";
import {Outlet} from "react-router-dom";

const Shell = () => {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    );
};

export default Shell;