
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    </>
  
  );
};

export default App;
