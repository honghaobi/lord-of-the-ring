import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MoviesPage from './components/MoviesPage'
import CharactersPage from './components/CharactersPage'
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesPage/>,
    },
    {
        path: "/movie/:movie_id/character/:char_id",
        element: <CharactersPage/>,
    }
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router}/>
);