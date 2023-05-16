import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./UI/LeftBbar/Navbar/Navbar";


function App() {


  return ( 
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
   
    
  )
}

export default App
