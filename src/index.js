import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeIndex from "./components/HomeIndex";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomeIndex/>,
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
