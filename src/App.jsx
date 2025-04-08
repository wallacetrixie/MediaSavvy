
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Steps from './Steps.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Steps/>
    </>
  
  );
};

export default App;
