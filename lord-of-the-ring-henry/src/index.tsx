import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Page 1</h1>,
    },
    {
        path: "/page2",
        element: <h1>Page 2</h1>,
    }
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router}/>
);