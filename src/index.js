import React from 'react';
import ReactDOM from 'react-dom/client';

import {createHashRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Index from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('/serviceWorker.js')
            .catch((error) => console.error(error))
    }
})


const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Index/>,
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
