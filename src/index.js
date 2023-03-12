import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/*',
                element: <ErrorPage/>,
            }
        ]
    }
])

root.render(
    <RouterProvider router={router}/>
);
