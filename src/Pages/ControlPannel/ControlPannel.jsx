import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Shared/Navbar/Navbar';

const ControlPannel = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className='border'>
                control bar
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ControlPannel;