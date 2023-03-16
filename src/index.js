import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator){
            navigator.serviceWorker.register('/serviceWorker.js')
                .catch((error) => console.error(error))
    }
})


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
],
    {basename : '/YourTour-React/'}
)

root.render(
    <RouterProvider router={router}/>
);
