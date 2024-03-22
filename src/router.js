import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

const Router = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default Router;