import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';




const LeftBar = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};



export default LeftBar;