import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import SecondPage from '../pages/secondPage/SecondPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/mainpage' element={<MainPage/>}></Route>
            <Route path='/secondpage' element={<SecondPage/>}></Route>
            <Route path="*" element={<Navigate to="/mainpage" replace />}/>
        </Routes>
    );
};


export default AppRouter;