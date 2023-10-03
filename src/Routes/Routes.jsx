import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Cart from '../Pages/Cart/Cart';
import Profile from '../Pages/Profile/Profile';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path:'*',
                element: ''
            }
        ]
    }
]);

export default router;
